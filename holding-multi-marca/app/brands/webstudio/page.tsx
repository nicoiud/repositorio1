'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Check, ArrowRight, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function WebStudioLanding() {
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
        body: JSON.stringify({ ...formData, marca: 'webstudio' }),
      });
      if (res.ok) router.push('/gracias?marca=webstudio');
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
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                WS
              </div>
              <span className="font-bold text-xl">WebStudio</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-gray-900 transition-colors">Servicios</a>
              <a href="#planes" className="text-gray-700 hover:text-gray-900 transition-colors">Planes</a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors">Contacto</a>
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sitios Web que Venden
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Diseño profesional, e-commerce y apps web a medida. Entregamos en tiempo record sin sacrificar calidad.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Planes <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué Hacemos?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '🎨 Landing Pages', desc: 'Alta conversión, carga rápida y diseño moderno' },
              { title: '🛒 E-commerce', desc: 'Tiendas online con MercadoPago, envíos y stock' },
              { title: '⚙️ Apps Web', desc: 'Sistemas a medida: reservas, turnos, portales' },
              { title: '📈 SEO', desc: 'Posicionamiento orgánico para que te encuentren' },
            ].map((servicio, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors">
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
          <h2 className="text-3xl font-bold text-center mb-12">Planes</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              {
                nombre: 'LANDING',
                precio: '$600',
                features: ['Diseño a medida', '1 página optimizada', 'Formulario de contacto', 'Responsive + SEO base', 'Entrega en 7 días', 'Dominio + hosting 1 año'],
                highlight: false,
              },
              {
                nombre: 'E-COMMERCE',
                precio: '$1.500',
                features: ['Tienda completa', 'Hasta 100 productos', 'MercadoPago integrado', 'Panel de gestión', 'SEO avanzado', 'Entrega en 15 días', 'Soporte 6 meses'],
                highlight: true,
              },
              {
                nombre: 'CUSTOM',
                precio: 'A medida',
                features: ['App web completa', 'Base de datos propia', 'Login / roles de usuario', 'Integraciones API', 'Mantenimiento incluido', 'Equipo dedicado', 'SLA garantizado'],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 ${
                  plan.highlight
                    ? 'bg-gray-900 text-white border-2 border-gray-700 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className={`text-3xl font-bold mb-6 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.precio}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check size={20} className={plan.highlight ? 'text-gray-300' : 'text-gray-700'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center w-full py-2 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-700'
                  }`}
                >
                  Cotizar
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
              { q: '¿Cuánto tarda el desarrollo?', a: 'Landing: 7 días. E-commerce: 15 días. Apps custom: según scope. Siempre te damos un cronograma claro antes de arrancar.' },
              { q: '¿Puedo ver avances antes de la entrega?', a: 'Sí. Trabajamos con revisiones cada 3-5 días y tenés acceso a un link de preview durante todo el desarrollo.' },
              { q: '¿Incluye el hosting?', a: 'El plan Landing incluye 1 año de hosting y dominio. E-commerce y Custom usan infraestructura en la nube (Vercel/AWS) que configuramos nosotros.' },
              { q: '¿Qué pasa después de la entrega?', a: 'Ofrecemos planes de mantenimiento mensual. También podés contratar horas de soporte sueltas si necesitás cambios puntuales.' },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-gray-600 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-700">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Cotizá Tu Proyecto</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-400" />
              <input type="email" name="email" placeholder="Tu email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-400" />
              <input type="tel" name="telefono" placeholder="Tu teléfono / WhatsApp" value={formData.telefono} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-400" />
              <input type="text" name="ubicacion" placeholder="Tu ubicación (ciudad/país)" value={formData.ubicacion} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-400" />
              <select name="tipo_negocio" value={formData.tipo_negocio} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-gray-400">
                <option value="">¿Qué necesitás?</option>
                <option value="landing">Landing page</option>
                <option value="ecommerce">Tienda online / E-commerce</option>
                <option value="app">App web / Sistema a medida</option>
                <option value="rediseno">Rediseño de sitio existente</option>
                <option value="seo">SEO / Posicionamiento</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" disabled={loading} className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : 'Solicitar Cotización'}
              </button>
            </form>

          <p className="text-center text-sm mt-4 opacity-70">Respondemos en menos de 24 horas</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">WebStudio</h3>
            <p className="text-gray-400 text-sm">Desarrollo web profesional para negocios que quieren crecer online.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} /> +54 11 XXXX-XXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} /> hola@webstudio.com.ar</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> Buenos Aires, Argentina</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Seguinos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Behance</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 WebStudio. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
