import React from 'react';
import { Music2, Truck, Palette, Sparkles, Hexagon } from 'lucide-react';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573188914650', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.1),rgba(88,28,135,0.5))]"></div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-center text-center text-white">
          <div className="relative mb-8 group">
            {/* Animated Background Hexagons */}
            <div className="absolute inset-0 -m-8 animate-spin-slow opacity-20">
              <Hexagon className="w-64 h-64 text-purple-500" />
            </div>
            <div className="absolute inset-0 -m-8 animate-reverse-spin opacity-20">
              <Hexagon className="w-64 h-64 text-indigo-500" />
            </div>
            
            {/* Main Logo Container */}
            <div className="w-48 h-48 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 animate-pulse"></div>
              
              {/* RM Letters */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  RM
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-2 right-2 animate-float">
                <Music2 className="w-8 h-8 text-purple-300" />
              </div>
              <div className="absolute bottom-2 left-2 animate-float-delayed">
                <Palette className="w-8 h-8 text-indigo-300" />
              </div>
              <div className="absolute bottom-2 right-2 animate-float">
                <Truck className="w-8 h-8 text-purple-300" />
              </div>
            </div>
            
            {/* Sparkle Effects */}
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="bg-purple-500 rounded-full p-2 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Rest of the component remains the same */}
          <h1 className="text-7xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Ronny Maldonado
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-6 h-6 text-purple-400" />
            <span className="text-2xl font-light">Director Creativo & Diseñador Multidisciplinario</span>
          </div>
          
          <p className="text-xl max-w-2xl mb-8 text-gray-300 leading-relaxed">
            Especialista en diseño gráfico, producción musical y servicios de transporte. 
            Transformando ideas en experiencias visuales y sonoras que cautivan e inspiran.
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all transform hover:scale-105">
              Ver Portafolio
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-400/10 rounded-full font-semibold transition-all">
              Contactar
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}