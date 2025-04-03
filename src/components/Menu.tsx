import React, { useState } from 'react';
import { menuItems } from '../data';
import type { MenuItem } from '../types';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'all'>('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">MENU</h2>
        
        <div className="flex justify-center gap-6 mb-16">
          {['all', 'coffee', 'pastry', 'breakfast'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as MenuItem['category'] | 'all')}
              className={`px-8 py-3 font-light tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-black/5'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map(item => (
            <div key={item.id} className="group">
              <div className="overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-light tracking-wide">{item.name}</h3>
                  <span className="text-lg font-light">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};