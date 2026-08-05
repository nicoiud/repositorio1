import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white flex flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[440px] rounded-full blur-[130px] opacity-20 bg-indigo-500" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative">
        <p className="text-7xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
          404
        </p>
        <h1 className="mt-6 text-2xl sm:text-3xl font-bold">Esta página no existe</h1>
        <p className="mt-3 text-gray-500 max-w-sm mx-auto">
          El link que seguiste puede estar roto o la página fue movida.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-transform hover:-translate-y-0.5"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
