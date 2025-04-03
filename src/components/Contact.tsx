import React, { useState } from 'react';
import type { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">GET IN TOUCH</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-light tracking-wide text-gray-700 mb-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-6 py-4 bg-white border-0 focus:ring-2 focus:ring-black transition-all duration-300 font-light"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-light tracking-wide text-gray-700 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-6 py-4 bg-white border-0 focus:ring-2 focus:ring-black transition-all duration-300 font-light"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-light tracking-wide text-gray-700 mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-6 py-4 bg-white border-0 focus:ring-2 focus:ring-black transition-all duration-300 font-light"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white py-4 font-light tracking-wider hover:bg-neutral-800 transition-colors duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};