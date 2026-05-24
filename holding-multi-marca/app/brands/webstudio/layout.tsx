import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebStudio — Desarrollo Web y E-commerce Profesional',
  description: 'Diseño y desarrollo de sitios web, tiendas online y apps web a medida. Landing pages desde $600. Entrega en 7 días.',
  openGraph: {
    title: 'WebStudio — Sitios Web que Venden',
    description: 'Diseño profesional, e-commerce y apps web a medida. Entregamos en tiempo record sin sacrificar calidad.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
