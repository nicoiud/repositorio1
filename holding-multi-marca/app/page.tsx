import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { brandList } from './lib/brands';
import Reveal from './components/Reveal';

export default function HubPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full blur-[130px] opacity-20 bg-indigo-500" />
        <div className="pointer-events-none absolute top-20 -left-40 w-[420px] h-[420px] rounded-full blur-[120px] opacity-15 bg-orange-500" />
        <div className="pointer-events-none absolute top-32 -right-40 w-[420px] h-[420px] rounded-full blur-[120px] opacity-15 bg-emerald-500" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <div className="relative max-w-3xl mx-auto px-4 pt-32 pb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 border border-white/10 backdrop-blur px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              5 marcas · 1 infraestructura
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-5xl sm:text-6xl font-bold leading-[1.08]">
              Holding{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
                Multi-Marca
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Soluciones tecnológicas para negocios argentinos. Desde instalaciones
              en tu local hasta automatización con inteligencia artificial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARCAS */}
      <section className="relative px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-600 text-center mb-8">
              Nuestras marcas
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandList.map((brand, i) => (
              <Reveal key={brand.slug} delay={i * 80}>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group relative flex flex-col h-full overflow-hidden bg-white/[0.03] rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20"
                >
                  {/* resplandor de la marca al pasar el mouse */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: brand.color }}
                  />

                  <div className="relative flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})` }}
                    >
                      {brand.initials}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-gray-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <h2 className="relative text-xl font-semibold mb-2">{brand.name}</h2>
                  <p className="relative text-gray-500 text-sm leading-relaxed flex-1">
                    {brand.hubDesc}
                  </p>

                  <span
                    className="relative mt-5 text-xs font-semibold uppercase tracking-wider opacity-70 transition-opacity group-hover:opacity-100"
                    style={{ color: brand.colorLight }}
                  >
                    Ver landing
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Holding Multi-Marca. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}
