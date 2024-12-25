import React from 'react';
import { Trophy, Users, Calendar, Star, Music, Truck } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Trophy, label: 'Premios Ganados', value: '15+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '200+' },
    { icon: Music, label: 'Producciones Musicales', value: '50+' },
    { icon: Calendar, label: 'Años de Experiencia', value: '10+' },
    { icon: Star, label: 'Proyectos Completados', value: '500+' },
    { icon: Truck, label: 'Servicios de Transporte', value: '1000+' }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}