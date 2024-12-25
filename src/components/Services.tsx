import React from 'react';
import { Briefcase, PenTool, Globe, Layout, Image, Music2, Palette, Smartphone, Video, Truck, Speaker, Mic } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: PenTool,
      title: 'Identidad de Marca',
      description: 'Creación de identidades únicas que cuentan tu historia y conectan con tu audiencia.'
    },
    {
      icon: Music2,
      title: 'Producción Musical',
      description: 'Creación y producción de música profesional para artistas y eventos.'
    },
    {
      icon: Layout,
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas y atractivas para aplicaciones web y móviles.'
    },
    {
      icon: Speaker,
      title: 'Publicidad Musical',
      description: 'Promoción y marketing para artistas y eventos musicales.'
    },
    {
      icon: Image,
      title: 'Diseño Impreso',
      description: 'Materiales impresos profesionales desde tarjetas hasta displays de gran formato.'
    },
    {
      icon: Globe,
      title: 'Diseño Web',
      description: 'Sitios web modernos y responsivos que capturan la esencia de tu marca.'
    },
    {
      icon: Truck,
      title: 'Servicios de Pick Up',
      description: 'Transporte seguro y confiable para equipos y materiales.'
    },
    {
      icon: Smartphone,
      title: 'Redes Sociales',
      description: 'Gráficos atractivos y materiales de marketing para redes sociales.'
    },
    {
      icon: Video,
      title: 'Motion Graphics',
      description: 'Animaciones dinámicas y gráficos en movimiento para plataformas digitales.'
    },
    {
      icon: Mic,
      title: 'Grabación de Audio',
      description: 'Estudio profesional para grabación y edición de audio.'
    },
    {
      icon: Palette,
      title: 'Dirección de Arte',
      description: 'Dirección creativa estratégica para campañas y proyectos.'
    },
    {
      icon: Briefcase,
      title: 'Marketing',
      description: 'Material publicitario completo y campañas de marketing.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-indigo-950 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Servicios & Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white/5 backdrop-blur p-6 rounded-xl hover:bg-white/10 transition-all group">
              <Icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}