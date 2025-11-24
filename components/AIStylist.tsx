import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, Loader2, Scissors } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToStylist, initializeChat } from '../services/geminiService';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'E aí, campeão! Eu sou o Consultor Virtual do Mestre da Navalha. Quer uma dica de corte novo ou saber qual barba combina com seu rosto?',
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Create a placeholder message for the AI response
    const aiMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: aiMsgId,
      role: 'model',
      text: '',
      timestamp: Date.now()
    }]);

    try {
      const stream = await sendMessageToStylist(userMsg.text);
      let fullText = "";
      
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMsgId ? { ...msg, text: fullText } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId ? { ...msg, text: "Ops, tive um problema técnico. Pode perguntar de novo?" } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-stylist" className="py-24 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Powered by Gemini AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Não sabe qual corte escolher?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Nosso <span className="text-gold-500 font-bold">Consultor de Estilo IA</span> analisa seu perfil e sugere as melhores opções de visagismo.
              Descreva seu tipo de cabelo, formato de rosto ou envie suas dúvidas sobre cuidados.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-dark-700 flex items-center justify-center text-gold-500 shrink-0">1</div>
                <p className="text-gray-300">Diga algo como: "Tenho rosto redondo e cabelo liso, o que recomenda?"</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-dark-700 flex items-center justify-center text-gold-500 shrink-0">2</div>
                <p className="text-gray-300">Receba sugestões personalizadas de cortes e barbas.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-dark-700 flex items-center justify-center text-gold-500 shrink-0">3</div>
                <p className="text-gray-300">Agende seu horário já sabendo o que pedir!</p>
              </li>
            </ul>
          </div>

          {/* Chat Interface */}
          <div className="bg-dark-900 rounded-2xl border border-dark-700 shadow-2xl overflow-hidden h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-dark-800 p-4 border-b border-dark-700 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white">Barber Stylist Bot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-400">Online agora</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-dark-700' : 'bg-gold-500/20 text-gold-500'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Scissors size={16} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gold-500 text-dark-900 font-medium rounded-tr-none' 
                        : 'bg-dark-800 text-gray-200 border border-dark-700 rounded-tl-none'
                    }`}
                  >
                    {msg.text || (
                        <div className="flex gap-1 items-center h-5">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-dark-800 border-t border-dark-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ex: Qual barba combina com cabelo raspado?"
                  className="flex-1 bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputText.trim()}
                  className="bg-gold-500 hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed text-dark-900 rounded-xl px-4 flex items-center justify-center transition-colors"
                >
                  {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIStylist;