import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl mb-6">404</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Página no encontrada</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
