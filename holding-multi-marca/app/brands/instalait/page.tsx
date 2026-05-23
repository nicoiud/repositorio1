'use client';

import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function InstalaITLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ubicacion: '',
    tipo_negocio: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, marca: 'instalait' }),
      });
      if (res.ok) {
        setEnviado(true);
        setFormData({ nombre: '', email: '', telefono: '', ubicacion: '', tipo_negocio: '' });
      }
    } catch {
      alert('Error al enviar. Intentá de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                IT
              </div>
              <span className="font-bold text-xl">InstalaIT</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors">Servicios</a>
              <a href="#planes" className="text-gray-700 hover:text-orange-500 transition-colors">Planes</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-500 transition-colors">FAQ</a>
              <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors">Contacto</a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 pt-2">
              <a href="#servicios" className="block py-2 text-gray-700">Servicios</a>
              <a href="#planes" className="block py-2 text-gray-700">Planes</a>
              <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
              <a href="#contacto" className="block py-2 text-gray-700">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Tecnología Completa para Tu Negocio
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            WiFi profesional, cámaras de seguridad, sistema de acceso y app integrada. Todo en uno.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Instalación <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios Incluidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '📡 WiFi Profesional', desc: 'Cobertura total + velocidad garantizada' },
              { title: '📹 Cámaras IP 4K', desc: 'Vigilancia 24/7 en vivo desde tu móvil' },
              { title: '🔐 Control de Acceso', desc: 'Biométrico o tarjeta RFID integrado' },
              { title: '📱 App Control', desc: 'Gestiona todo desde tu smartphone' },
            ].map((servicio, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                <h3 className="font-bold text-lg mb-2">{servicio.title}</h3>
                <p className="text-gray-600 text-sm">{servicio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Instalación</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              {
                nombre: 'BÁSICO',
                precio: '$1.200',
                features: ['WiFi 6 profesional', '2 cámaras IP', 'Cableado Cat6', 'App básica', 'Soporte 30 días'],
                highlight: false,
              },
              {
                nombre: 'ESTÁNDAR',
                precio: '$1.800',
                features: ['WiFi 6 profesional', '4 cámaras IP 4K', 'Cableado Cat6', 'App avanzada', 'Soporte 90 días', 'Backup en nube'],
                highlight: true,
              },
              {
                nombre: 'PREMIUM',
                precio: '$3.000',
                features: ['WiFi 6 + Mesh', '8 cámaras IP 4K', 'Control de acceso', 'App + ePOS', 'Soporte 1 año', 'Backup + Analytics', 'Parlantes integrados'],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 ${
                  plan.highlight
                    ? 'bg-orange-500 text-white border-2 border-orange-600 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className={`text-4xl font-bold mb-6 ${plan.highlight ? 'text-white' : 'text-orange-500'}`}>
                  {plan.precio}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check size={20} className={plan.highlight ? 'text-white' : 'text-orange-500'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center w-full py-2 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-orange-500 hover:bg-gray-100'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  Solicitar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿Cuánto tiempo demora la instalación?', a: 'Entre 2-5 días dependiendo del plan. Nos presentamos con toda la infraestructura lista.' },
              { q: '¿Incluye mantenimiento?', a: 'Los primeros 30-90 días están incluidos. Luego ofrecemos planes de soporte desde $100/mes.' },
              { q: '¿Qué pasa si algo falla?', a: 'Soporte 24/7 por Telegram. Resolvemos en menos de 2 horas o visitamos tu local.' },
              { q: '¿Es escalable?', a: 'Totalmente. Podés agregar más cámaras, parlantes o dispositivos cuando lo necesitás.' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer group">
                <summary className="font-semibold text-gray-900 hover:text-orange-500 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-orange-500">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Solicita Tu Presupuesto</h2>

          {enviado ? (
            <div className="bg-white text-orange-600 rounded-lg p-8 text-center">
              <Check size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Solicitud recibida!</h3>
              <p className="text-gray-600">Nos contactaremos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-300" />
              <input type="email" name="email" placeholder="Tu email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-300" />
              <input type="tel" name="telefono" placeholder="Tu teléfono / WhatsApp" value={formData.telefono} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-300" />
              <input type="text" name="ubicacion" placeholder="Tu ubicación (ciudad/barrio)" value={formData.ubicacion} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-300" />
              <select name="tipo_negocio" value={formData.tipo_negocio} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-orange-300">
                <option value="">Seleccioná tu tipo de negocio</option>
                <option value="peluqueria">Peluquería / Barbería</option>
                <option value="consultorio">Consultorio / Clínica</option>
                <option value="local">Local comercial</option>
                <option value="oficina">Oficina</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" className="w-full bg-white text-orange-500 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Enviar Solicitud
              </button>
            </form>
          )}

          <p className="text-center text-sm mt-4 opacity-90">Respondemos en menos de 24 horas</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">InstalaIT</h3>
            <p className="text-gray-400 text-sm">Soluciones tecnológicas integrales para tu negocio.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} /> +54 11 XXXX-XXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} /> info@instalait.com.ar</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> Buenos Aires, Argentina</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Seguinos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 InstalaIT. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
