import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  try {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Você é um barbeiro especialista e consultor de imagem masculina da barbearia "Mestre da Navalha".
        Seu objetivo é ajudar clientes a escolherem o melhor corte de cabelo ou estilo de barba baseado no formato do rosto, tipo de cabelo e tendências atuais.
        
        Diretrizes:
        1. Seja cordial, descolado e profissional (use gírias leves de barbearia se apropriado).
        2. Pergunte sobre o formato do rosto ou estilo de vida se o usuário não informar.
        3. Sugira serviços da barbearia (Corte Clássico, Barba Terapia, Degradê).
        4. Mantenha as respostas curtas (máximo 3 parágrafos).
        5. Se perguntarem preços, invente preços realistas em Reais (R$).
        `,
        temperature: 0.7,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize AI:", error);
    return false;
  }
};

export const sendMessageToStylist = async (message: string): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    const initialized = initializeChat();
    if (!initialized || !chatSession) {
      // Fallback generator if API fails or key is missing
      async function* fallbackGenerator() {
        yield "Desculpe, o consultor IA está indisponível no momento (Verifique a API Key).";
      }
      return fallbackGenerator();
    }
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    async function* streamGenerator() {
      for await (const chunk of result) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    }
    return streamGenerator();

  } catch (error) {
    console.error("Error sending message:", error);
    async function* errorGenerator() {
      yield "Ocorreu um erro ao processar sua mensagem. Tente novamente.";
    }
    return errorGenerator();
  }
};
