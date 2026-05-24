'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Check } from 'lucide-react';

const marcaConfig: Record<string, { nombre: string; color: string; text: string }> = {
  instalait:   { nombre: 'InstalaIT',  color: 'bg-orange-500', text: 'text-orange-500' },
  techsoporte: { nombre: 'TechSoporte', color: 'bg-emerald-500', text: 'text-emerald-500' },
  automata:    { nombre: 'AutomataAI', color: 'bg-violet-600',  text: 'text-violet-600' },
  miasistente: { nombre: 'MiAsistente', color: 'bg-blue-500',   text: 'text-blue-500' },
  webstudio:   { nombre: 'WebStudio',  color: 'bg-gray-900',   text: 'text-gray-900' },
};

function GraciasContent() {
  const params = useSearchParams();
  const marca = params.get('marca') ?? 'instalait';
  const config = marcaConfig[marca] ?? marcaConfig.instalait;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className={`w-20 h-20 ${config.color} rounded-full flex items-center justify-center mb-6`}>
        <Check size={40} className="text-white" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">¡Gracias!</h1>
      <p className="text-xl text-gray-600 mb-2">Tu solicitud fue recibida correctamente.</p>
      <p className="text-gray-400 mb-10">El equipo de <span className={`font-semibold ${config.text}`}>{config.nombre}</span> te contactará en menos de 24 horas.</p>
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-800 transition-colors text-sm underline"
      >
        Volver al inicio
      </Link>
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
