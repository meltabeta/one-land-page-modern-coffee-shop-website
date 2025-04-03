import React from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">TESTIMONIALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-10 bg-neutral-50">
              <Quote className="w-8 h-8 text-neutral-800 mb-6" />
              <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed italic">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium tracking-wide">{testimonial.name}</h4>
                  <p className="text-gray-600 font-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};