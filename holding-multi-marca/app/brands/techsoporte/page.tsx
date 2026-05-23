'use client';

import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function TechSoporteLanding() {
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
        body: JSON.stringify({ ...formData, marca: 'techsoporte' }),
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
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                TS
              </div>
              <span className="font-bold text-xl">TechSoporte</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-emerald-500 transition-colors">Servicios</a>
              <a href="#planes" className="text-gray-700 hover:text-emerald-500 transition-colors">Planes</a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-500 transition-colors">FAQ</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-500 transition-colors">Contacto</a>
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
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Soporte Técnico 24/7 para Tu PyME
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Resolvemos tus problemas de IT de forma remota o presencial. Sin contratos largos, sin letra chica.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Soporte <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué Resolvemos?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '💻 Soporte Remoto', desc: 'Conexión en minutos para resolver cualquier problema' },
              { title: '🔧 Mantenimiento', desc: 'Preventivo mensual para evitar caídas inesperadas' },
              { title: '🌐 Redes y Servidores', desc: 'Configuración, optimización y monitoreo continuo' },
              { title: '🎯 Helpdesk', desc: 'Mesa de ayuda dedicada para todo tu equipo' },
            ].map((servicio, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
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
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Soporte</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              {
                nombre: 'BÁSICO',
                precio: '$299/mes',
                features: ['Soporte remoto', 'Hasta 5 usuarios', 'Tiempo respuesta 4hs', 'Chat y email', 'Reporte mensual'],
                highlight: false,
              },
              {
                nombre: 'ESTÁNDAR',
                precio: '$599/mes',
                features: ['Soporte remoto + presencial', 'Hasta 15 usuarios', 'Tiempo respuesta 2hs', 'Chat, email y teléfono', 'Mantenimiento preventivo', 'Reporte semanal'],
                highlight: true,
              },
              {
                nombre: 'PREMIUM',
                precio: '$999/mes',
                features: ['Soporte ilimitado', 'Usuarios ilimitados', 'Tiempo respuesta 30min', 'Canal Telegram dedicado', 'Mantenimiento + monitoreo', 'SLA garantizado', 'CTO as a service'],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 ${
                  plan.highlight
                    ? 'bg-emerald-500 text-white border-2 border-emerald-600 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className={`text-3xl font-bold mb-6 ${plan.highlight ? 'text-white' : 'text-emerald-500'}`}>
                  {plan.precio}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check size={20} className={plan.highlight ? 'text-white' : 'text-emerald-500'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center w-full py-2 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-emerald-500 hover:bg-gray-100'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`}
                >
                  Contratar
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
              { q: '¿En cuánto tiempo responden?', a: 'Dependiendo del plan: 30 minutos, 2 horas o 4 horas. Los urgentes siempre tienen prioridad.' },
              { q: '¿Atienden fines de semana?', a: 'Sí. El soporte es 24/7/365, incluyendo feriados. Tu negocio no para, nosotros tampoco.' },
              { q: '¿Necesito contrato largo?', a: 'No. Los planes son mensuales y podés cancelar en cualquier momento sin penalidades.' },
              { q: '¿Qué pasa si necesito soporte presencial?', a: 'Los planes Estándar y Premium incluyen visitas presenciales en CABA y GBA. Otras zonas con costo adicional.' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-emerald-500 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-emerald-500">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Solicitá Tu Plan de Soporte</h2>

          {enviado ? (
            <div className="bg-white text-emerald-600 rounded-lg p-8 text-center">
              <Check size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Solicitud recibida!</h3>
              <p className="text-gray-600">Nos contactaremos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-300" />
              <input type="email" name="email" placeholder="Tu email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-300" />
              <input type="tel" name="telefono" placeholder="Tu teléfono / WhatsApp" value={formData.telefono} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-300" />
              <input type="text" name="ubicacion" placeholder="Tu ubicación (ciudad/barrio)" value={formData.ubicacion} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-300" />
              <select name="tipo_negocio" value={formData.tipo_negocio} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-emerald-300">
                <option value="">Seleccioná tu tipo de empresa</option>
                <option value="pyme">PyME (1-20 empleados)</option>
                <option value="mediana">Empresa mediana (20-100)</option>
                <option value="startup">Startup / Emprendimiento</option>
                <option value="consultora">Consultora / Estudio</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" className="w-full bg-white text-emerald-500 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Solicitar Soporte
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
            <h3 className="font-bold mb-4">TechSoporte</h3>
            <p className="text-gray-400 text-sm">Soporte técnico profesional para que tu empresa nunca se detenga.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} /> +54 11 XXXX-XXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} /> info@techsoporte.com.ar</div>
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
          <p>&copy; 2025 TechSoporte. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
