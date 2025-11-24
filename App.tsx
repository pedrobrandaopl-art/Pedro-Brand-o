import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIStylist from './components/AIStylist';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen text-gray-100 selection:bg-gold-500 selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStylist />
        <Gallery />
      </main>
      <Footer />
      
      {/* Scroll to Top Button could go here */}
    </div>
  );
};

export default App;
