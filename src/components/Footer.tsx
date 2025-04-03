import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">OPENING HOURS</h3>
            <ul className="space-y-3 font-light">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday: 8am - 9pm</li>
              <li>Sunday: 8am - 9pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">CONTACT</h3>
            <ul className="space-y-3 font-light">
              <li>123 Coffee Street</li>
              <li>City, Country</li>
              <li>+1 (555) 123-4567</li>
              <li>info@coffeeshop.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">FOLLOW US</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} BREW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};