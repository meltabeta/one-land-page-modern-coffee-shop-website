import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8 tracking-wide">OUR STORY</h2>
            <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed">
              Founded in 2015, our coffee shop transcends the ordinary coffee experience. 
              We've cultivated a space where coffee enthusiasts, artists, and locals converge, 
              sharing stories and creating lasting connections.
            </p>
            <p className="text-lg text-gray-700 mb-12 font-light leading-relaxed">
              Our commitment to quality is unwavering. We source our beans directly from 
              sustainable farms, ensuring each cup represents the perfect balance of flavor and ethics.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <MapPin className="w-6 h-6 text-neutral-800" />
                <span className="font-light tracking-wide">123 Coffee Street, City, Country</span>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="w-6 h-6 text-neutral-800" />
                <span className="font-light tracking-wide">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-6">
                <Clock className="w-6 h-6 text-neutral-800" />
                <span className="font-light tracking-wide">Mon-Fri: 7am-8pm | Sat-Sun: 8am-9pm</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1600093463592-2e8d23c18813?auto=format&fit=crop&q=80&w=800"
              alt="Coffee shop interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};