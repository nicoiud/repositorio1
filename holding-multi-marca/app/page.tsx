import Link from 'next/link';

const marcas = [
  {
    slug: 'instalait',
    nombre: 'InstalaIT',
    descripcion: 'WiFi profesional, cámaras IP y control de acceso para tu local.',
    color: 'bg-orange-500',
    hover: 'hover:border-orange-400',
    text: 'text-orange-500',
    emoji: '🔧',
  },
  {
    slug: 'techsoporte',
    nombre: 'TechSoporte',
    descripcion: 'Soporte técnico 24/7 para PyMes. Remoto o presencial.',
    color: 'bg-emerald-500',
    hover: 'hover:border-emerald-400',
    text: 'text-emerald-500',
    emoji: '🆘',
  },
  {
    slug: 'automata',
    nombre: 'AutomataAI',
    descripcion: 'Automatización de procesos con n8n e inteligencia artificial.',
    color: 'bg-violet-600',
    hover: 'hover:border-violet-400',
    text: 'text-violet-600',
    emoji: '🤖',
  },
  {
    slug: 'miasistente',
    nombre: 'MiAsistente',
    descripcion: 'Asistente IA personal para emprendedores y profesionales.',
    color: 'bg-blue-500',
    hover: 'hover:border-blue-400',
    text: 'text-blue-500',
    emoji: '👤',
  },
  {
    slug: 'webstudio',
    nombre: 'WebStudio',
    descripcion: 'Desarrollo web y e-commerce profesional a medida.',
    color: 'bg-gray-900',
    hover: 'hover:border-gray-500',
    text: 'text-gray-900',
    emoji: '🌐',
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-white border-b border-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            5 marcas · 1 infraestructura
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Holding Multi-Marca
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Soluciones tecnológicas para negocios argentinos. Desde instalaciones hasta automatización con IA.
          </p>
        </div>
      </section>

      {/* GRID DE MARCAS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 uppercase tracking-widest text-center mb-10">Nuestras marcas</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {marcas.map((marca) => (
              <Link
                key={marca.slug}
                href={`/brands/${marca.slug}`}
                className={`bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all group ${marca.hover}`}
              >
                <div className={`w-14 h-14 ${marca.color} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  {marca.emoji}
                </div>
                <h2 className={`text-xl font-bold mb-2 ${marca.text}`}>
                  {marca.nombre}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{marca.descripcion}</p>
                <div className="mt-4 text-xs font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
                  Ver landing →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Holding Multi-Marca. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}
