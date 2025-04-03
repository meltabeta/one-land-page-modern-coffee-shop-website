import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white backdrop-blur-lg bg-opacity-80' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-3">
            <Coffee className={`w-8 h-8 ${isScrolled ? 'text-black' : 'text-white'}`} />
            <span className={`font-light text-xl tracking-wider ${isScrolled ? 'text-black' : 'text-white'}`}>
              BREW
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {['Menu', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-black' : 'text-white'
                } hover:text-amber-400 transition-colors duration-300 tracking-wide font-light`}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-lg absolute left-0 right-0 p-4">
            {['Menu', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-black hover:text-amber-600 transition-colors font-light tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};