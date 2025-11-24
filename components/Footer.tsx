import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-800 pt-20 pb-10 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">MESTRE<span className="text-gold-500">NAVALHA</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Resgatando a tradição da barbearia clássica com a modernidade que o homem contemporâneo exige. Venha viver essa experiência.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contatos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold-500 shrink-0" size={20} />
                <span>Rua Augusta, 1500 - Cerqueira César<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Horários</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Segunda - Sexta</span>
                <span className="text-white font-medium">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Sábado</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Domingo</span>
                <span className="text-gold-500 font-medium">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h4 className="text-white font-bold mb-6 text-lg">Agendamento</h4>
             <p className="text-gray-400 text-sm mb-4">Prefere agendar pelo WhatsApp?</p>
             <a 
               href="https://wa.me/5511999999999" 
               target="_blank"
               rel="noopener noreferrer"
               className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded transition-colors flex items-center justify-center gap-2"
             >
                 <Phone size={18} />
                 Chamar no Zap
             </a>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mestre da Navalha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;