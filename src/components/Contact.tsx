import React, { useState } from 'react';
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock, Music2, Truck } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}.\nEmail: ${formData.email}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/573188914650?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-b from-indigo-950 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Creemos Juntos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Teléfono</div>
                  <a href="tel:3188914650" className="hover:text-purple-400 transition-colors">
                    +57 318 891 4650
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Correo</div>
                  <a href="mailto:ronnymb7@gmail.com" className="hover:text-purple-400 transition-colors">
                    ronnymb7@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Servicios Musicales</div>
                  <div>Producción y Publicidad</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Servicios de Pick Up</div>
                  <div>Transporte Profesional</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Ubicación</div>
                  <div>Colombia</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Horario Laboral</div>
                  <div>Lunes a Sábado</div>
                  <div>7:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Correo"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              >
                <option value="">Selecciona el Servicio</option>
                <option value="design">Diseño Gráfico</option>
                <option value="music">Producción Musical</option>
                <option value="pickup">Servicios de Pick Up</option>
              </select>
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
          
          <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-white/10">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}