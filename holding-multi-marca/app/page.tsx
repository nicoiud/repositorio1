import Link from 'next/link';

const marcas = [
  {
    slug: 'instalait',
    nombre: 'InstalaIT',
    descripcion: 'WiFi + Cámaras + App para tu negocio',
    color: 'bg-orange-500',
    emoji: '🔧',
  },
  {
    slug: 'techsoporte',
    nombre: 'TechSoporte',
    descripcion: 'Soporte técnico 24/7 para PyMes',
    color: 'bg-emerald-500',
    emoji: '🆘',
  },
  {
    slug: 'automata',
    nombre: 'AutomataAI',
    descripcion: 'Automatización de procesos con IA',
    color: 'bg-violet-600',
    emoji: '🤖',
  },
  {
    slug: 'miasistente',
    nombre: 'MiAsistente',
    descripcion: 'Asistente IA personal para emprendedores',
    color: 'bg-blue-500',
    emoji: '👤',
  },
  {
    slug: 'webstudio',
    nombre: 'WebStudio',
    descripcion: 'Desarrollo web y e-commerce profesional',
    color: 'bg-gray-900',
    emoji: '🌐',
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Holding Multi-Marca</h1>
      <p className="text-gray-500 mb-12 text-center">Seleccioná una marca para ver su landing</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {marcas.map((marca) => (
          <Link
            key={marca.slug}
            href={`/brands/${marca.slug}`}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
          >
            <div className={`w-12 h-12 ${marca.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
              {marca.emoji}
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
              {marca.nombre}
            </h2>
            <p className="text-gray-500 text-sm">{marca.descripcion}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
