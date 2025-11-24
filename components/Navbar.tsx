import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Serviços', href: '#services', id: 'services' },
    { name: 'IA Stylist', href: '#ai-stylist', id: 'ai-stylist' },
    { name: 'Galeria', href: '#gallery', id: 'gallery' },
    { name: 'Contato', href: '#contact', id: 'contact' },
  ];

  // Função robusta para lidar com cliques e rolagem suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      // Ajuste de offset se necessário, ou scrollIntoView padrão
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
    }
  };

  // Scroll Spy para destacar o link ativo
  useEffect(() => {
    const handleScroll = () => {
      // Adiciona um offset para considerar a altura da tela e ativar a seção um pouco antes
      const scrollPosition = window.scrollY + 300; 

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation - Floating Capsule Style */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 hidden md:flex items-start justify-between pointer-events-none">
        
        {/* Logo - Top Left */}
        <div className="pointer-events-auto">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group bg-dark-900/50 backdrop-blur-md p-2 pr-4 rounded-full border border-white/5 hover:border-gold-500/30 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-dark-900 shadow-lg shadow-gold-500/20">
              <Scissors size={18} />
            </div>
            <span className="font-bold text-lg tracking-wider text-white">MESTRE<span className="text-gold-500">.N</span></span>
          </a>
        </div>

        {/* Center Capsule Navbar */}
        <nav className="pointer-events-auto absolute left-1/2 transform -translate-x-1/2 top-6">
          <ul className="flex items-center bg-dark-800/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl shadow-black/50 gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`
                    cursor-pointer relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out flex items-center justify-center
                    ${activeSection === link.id 
                      ? 'bg-gold-500 text-dark-900 shadow-md shadow-gold-500/20 translate-y-0' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Top Right */}
        <div className="pointer-events-auto">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-white text-dark-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Calendar size={18} />
            <span>Agendar</span>
          </a>
        </div>
      </header>

      {/* Mobile Navigation - Standard Bar */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/5">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-dark-900">
              <Scissors size={18} />
            </div>
            <span className="font-bold text-lg text-white">MESTRE<span className="text-gold-500">NAVALHA</span></span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out border-b border-dark-700
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-4 pb-4 space-y-2 bg-dark-900">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-gold-500 hover:bg-dark-800 rounded-lg transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="cursor-pointer block w-full text-center mt-4 px-5 py-3 bg-gold-500 text-dark-900 font-bold rounded-lg"
            >
                Agendar Horário
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;