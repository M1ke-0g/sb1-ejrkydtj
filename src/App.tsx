import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Contact />
      
      <footer className="bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} Ronny Maldonado. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;