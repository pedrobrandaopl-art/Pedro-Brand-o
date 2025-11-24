import React from 'react';
import { CalendarCheck, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop" 
          alt="Barber Shop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-gold-500 font-bold tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
          ESTILO • TRADIÇÃO • EXCELÊNCIA
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Cortes que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-700">Definem Você</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Experimente o melhor da barbearia clássica com um toque moderno. 
          Profissionais experientes, ambiente relaxante e resultados impecáveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold text-lg rounded transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <CalendarCheck size={20} />
            Agendar Agora
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScrollTo(e, 'services')}
            className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold text-lg rounded transition-all flex items-center justify-center cursor-pointer"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      <a 
        href="#services" 
        onClick={(e) => handleScrollTo(e, 'services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;