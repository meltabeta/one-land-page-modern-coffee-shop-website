import React from 'react';
import { Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <Coffee className="w-20 h-20 mb-8 animate-fade-in" />
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">
          Craft & Culture
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 font-light">
          Experience coffee in its purest form
        </p>
        <a 
          href="#menu" 
          className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-none font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          VIEW MENU
        </a>
      </div>
    </div>
  );
};