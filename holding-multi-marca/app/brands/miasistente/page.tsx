'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Check, ArrowRight, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function MiAsistenteLanding() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ubicacion: '',
    tipo_negocio: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, marca: 'miasistente' }),
      });
      if (res.ok) router.push('/gracias?marca=miasistente');
    } catch {
      alert('Error al enviar. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                MA
              </div>
              <span className="font-bold text-xl">MiAsistente</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#funciones" className="text-gray-700 hover:text-blue-500 transition-colors">Funciones</a>
              <a href="#planes" className="text-gray-700 hover:text-blue-500 transition-colors">Planes</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-500 transition-colors">FAQ</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-500 transition-colors">Contacto</a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 pt-2">
              <a href="#funciones" className="block py-2 text-gray-700">Funciones</a>
              <a href="#planes" className="block py-2 text-gray-700">Planes</a>
              <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
              <a href="#contacto" className="block py-2 text-gray-700">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Tu Asistente IA Personal
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Gestioná tu agenda, respondé mensajes, analizá datos y más — todo desde una sola app inteligente.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Probar Gratis <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FUNCIONES */}
      <section id="funciones" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué Puede Hacer?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '📅 Agenda Inteligente', desc: 'Organiza tus reuniones y te recuerda prioridades automáticamente' },
              { title: '💬 Respuestas Auto', desc: 'Responde WhatsApp, email e Instagram según tu estilo' },
              { title: '📈 Análisis de Datos', desc: 'Convierte tus métricas en resúmenes accionables en segundos' },
              { title: '🔌 Integraciones', desc: 'Conecta con Google, Notion, Slack, WhatsApp y más' },
            ].map((funcion, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-lg mb-2">{funcion.title}</h3>
                <p className="text-gray-600 text-sm">{funcion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planes</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              {
                nombre: 'FREE',
                precio: '$0/mes',
                features: ['1 asistente IA', '100 consultas/mes', 'Integración Google', 'Resúmenes diarios', 'App web y móvil'],
                highlight: false,
              },
              {
                nombre: 'PRO',
                precio: '$29/mes',
                features: ['1 asistente personalizado', 'Consultas ilimitadas', 'Todas las integraciones', 'Respuestas automáticas', 'Análisis avanzado', 'Soporte prioritario'],
                highlight: true,
              },
              {
                nombre: 'TEAM',
                precio: '$79/mes',
                features: ['Hasta 5 asistentes', 'Consultas ilimitadas', 'Panel de equipo', 'Flujos compartidos', 'API access', 'Onboarding personalizado', 'SLA garantizado'],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 ${
                  plan.highlight
                    ? 'bg-blue-500 text-white border-2 border-blue-600 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className={`text-3xl font-bold mb-6 ${plan.highlight ? 'text-white' : 'text-blue-500'}`}>
                  {plan.precio}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check size={20} className={plan.highlight ? 'text-white' : 'text-blue-500'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center w-full py-2 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-blue-500 hover:bg-gray-100'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Empezar
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
              { q: '¿El asistente aprende de mí?', a: 'Sí. Cuanto más lo usás, mejor entiende tu estilo, prioridades y preferencias. Se adapta a vos.' },
              { q: '¿Mis datos están seguros?', a: 'Tus datos son tuyos. Usamos cifrado de extremo a extremo y nunca los vendemos a terceros.' },
              { q: '¿Funciona en español?', a: 'Totalmente. Está optimizado para español latinoamericano, incluyendo modismos y contexto local.' },
              { q: '¿Puedo cancelar cuando quiero?', a: 'Sí, sin penalidades. Si cancelás, conservás acceso hasta el final del período pagado.' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-blue-500 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Empezá Gratis Hoy</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-300" />
              <input type="email" name="email" placeholder="Tu email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-300" />
              <input type="tel" name="telefono" placeholder="Tu teléfono / WhatsApp" value={formData.telefono} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-300" />
              <input type="text" name="ubicacion" placeholder="Tu ubicación (ciudad/país)" value={formData.ubicacion} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-300" />
              <select name="tipo_negocio" value={formData.tipo_negocio} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">¿Cómo usarías el asistente?</option>
                <option value="emprendedor">Emprendedor / Freelance</option>
                <option value="ejecutivo">Ejecutivo / Manager</option>
                <option value="equipo">Para mi equipo</option>
                <option value="personal">Uso personal</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" disabled={loading} className="w-full bg-white text-blue-500 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : 'Crear Cuenta Gratis'}
              </button>
            </form>

          <p className="text-center text-sm mt-4 opacity-90">Sin tarjeta de crédito requerida</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">MiAsistente</h3>
            <p className="text-gray-400 text-sm">El asistente IA personal para emprendedores y profesionales.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} /> +54 11 XXXX-XXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} /> hola@miasistente.app</div>
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
          <p>&copy; 2025 MiAsistente. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
