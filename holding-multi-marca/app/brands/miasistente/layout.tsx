import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MiAsistente — Tu Asistente IA Personal',
  description: 'Gestioná tu agenda, respondé mensajes y analizá datos con tu asistente IA personal. Gratis para empezar.',
  openGraph: {
    title: 'MiAsistente — Tu Asistente IA Personal',
    description: 'Gestioná tu agenda, respondé mensajes, analizá datos y más — todo desde una sola app inteligente.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
