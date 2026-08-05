'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { brands, WHATSAPP } from '../lib/brands';

function GraciasContent() {
  const params = useSearchParams();
  const slug = params.get('marca') ?? '';
  const brand = brands[slug] ?? brands.instalait;

  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola! Acabo de dejar mis datos en la web de ${brand.name}.`,
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white flex flex-col items-center justify-center px-4 text-center">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[130px] opacity-25"
        style={{ background: brand.color }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative max-w-md">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
            boxShadow: `0 20px 50px -12px ${brand.color}80`,
          }}
        >
          <Check size={38} className="text-white" strokeWidth={3} />
        </div>

        <h1 className="text-4xl font-bold mb-4">¡Listo, recibimos tu consulta!</h1>
        <p className="text-gray-400 leading-relaxed mb-2">
          El equipo de{' '}
          <span className="font-semibold" style={{ color: brand.colorLight }}>
            {brand.name}
          </span>{' '}
          te va a contactar en menos de 24 horas.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          Si es urgente, escribinos directamente y lo vemos ahora.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <MessageCircle size={18} /> Escribir por WhatsApp
          </a>
          <Link
            href={`/brands/${brand.slug}`}
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold backdrop-blur transition-colors"
          >
            Volver a la web
          </Link>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 text-gray-600 hover:text-gray-400 text-sm transition-colors"
        >
          Ver todas las marcas del holding →
        </Link>
      </div>
    </main>
  );
}

export default function GraciasPage() {
  return (
    <Suspense>
      <GraciasContent />
    </Suspense>
  );
}
