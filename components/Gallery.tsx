import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop", // 1. Barber cutting hair
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=800&auto=format&fit=crop", // 2. Vintage Chair
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop", // 3. Tools on table
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop", // 4. Styling / Product application (NEW)
    "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=800&auto=format&fit=crop", // 5. Shave
    "https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=800&auto=format&fit=crop"  // 6. Shop Interior
  ];

  return (
    <section id="gallery" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Portfólio</span>
            <h2 className="text-4xl font-bold text-white mt-2">Nossos Trabalhos</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors mt-4 md:mt-0">
            <Instagram size={20} />
            <span>@MestreDaNavalha</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-square bg-dark-800">
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop'; // Fallback seguro
                }}
              />
              <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-bold tracking-widest border border-white px-4 py-2 uppercase text-sm">Ver Detalhes</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold-500 font-semibold">
                <Instagram size={20} />
                <span>Siga no Instagram</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;