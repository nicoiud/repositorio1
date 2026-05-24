import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechSoporte — Soporte Técnico 24/7 para PyMes',
  description: 'Soporte técnico remoto y presencial para PyMes. Planes mensuales sin contrato largo. Respondemos en menos de 2 horas.',
  openGraph: {
    title: 'TechSoporte — Soporte Técnico 24/7 para PyMes',
    description: 'Resolvemos tus problemas de IT de forma remota o presencial. Sin contratos largos.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
