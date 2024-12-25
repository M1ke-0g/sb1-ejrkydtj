import React from 'react';
import { LightbulbIcon, Pencil, Eye, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    { icon: LightbulbIcon, title: 'Descubrimiento', description: 'Entendiendo tu visión y objetivos' },
    { icon: Pencil, title: 'Diseño', description: 'Creando conceptos e iteraciones' },
    { icon: Eye, title: 'Revisión', description: 'Refinando y perfeccionando' },
    { icon: Rocket, title: 'Lanzamiento', description: 'Entregando excelencia' }
  ];

  return (
    <div className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Proceso Creativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-purple-500/20"></div>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}