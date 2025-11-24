import React from 'react';
import { ServiceItem } from '../types';
import { Scissors, Zap, User, Coffee } from 'lucide-react';

const servicesList: ServiceItem[] = [
  { id: '1', name: 'Corte Clássico', description: 'Corte tradicional com tesoura e acabamento na navalha.', price: 'R$ 60,00', duration: '45 min' },
  { id: '2', name: 'Barba Terapia', description: 'Toalha quente, esfoliação, massagem facial e modelagem.', price: 'R$ 45,00', duration: '30 min' },
  { id: '3', name: 'Combo Completo', description: 'Corte de cabelo + Barba terapia + Sobrancelha.', price: 'R$ 95,00', duration: '1h 15min' },
  { id: '4', name: 'Corte Infantil', description: 'Para os pequenos cavalheiros (até 10 anos).', price: 'R$ 45,00', duration: '40 min' },
  { id: '5', name: 'Acabamento & Pezinho', description: 'Manutenção rápida dos contornos.', price: 'R$ 25,00', duration: '15 min' },
  { id: '6', name: 'Platinado / Tintura', description: 'Coloração profissional e descoloração segura.', price: 'A partir de R$ 120', duration: '2h+' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">O que oferecemos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Menu de Serviços</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {servicesList.map((service) => (
            <div key={service.id} className="bg-dark-800 border border-dark-700 rounded-lg p-8 hover:border-gold-500/50 transition-colors group relative overflow-hidden">
               {/* Background Hover Effect */}
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Scissors size={64} className="text-gold-500 transform rotate-45" />
               </div>
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">{service.name}</h3>
                    <span className="text-gold-500 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    <span className="flex items-center gap-1"><Zap size={14} /> {service.duration}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white">Primeira vez na casa?</h3>
                <p className="text-gray-400">Ganhe uma bebida de cortesia no seu primeiro atendimento.</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gold-500">
                    <Coffee size={24} />
                    <span className="font-bold">Cerveja ou Café</span>
                </div>
                <div className="h-8 w-px bg-dark-600"></div>
                <div className="flex items-center gap-2 text-gold-500">
                    <User size={24} />
                    <span className="font-bold">Wi-Fi Grátis</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
