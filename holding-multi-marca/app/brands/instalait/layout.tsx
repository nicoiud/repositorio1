import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InstalaIT — WiFi, Cámaras y App para tu Negocio',
  description: 'Instalación profesional de WiFi 6, cámaras IP 4K y control de acceso para locales comerciales en Buenos Aires.',
  openGraph: {
    title: 'InstalaIT — Tecnología Completa para Tu Negocio',
    description: 'WiFi profesional, cámaras de seguridad y app integrada. Todo en uno.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
