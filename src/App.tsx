import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;