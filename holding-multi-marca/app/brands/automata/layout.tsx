import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutomataAI — Automatización B2B con n8n e IA',
  description: 'Automatizá tus procesos de negocio con n8n e inteligencia artificial. Integraciones, agentes IA y reportes automáticos para empresas.',
  openGraph: {
    title: 'AutomataAI — Automatizá Tu Negocio con IA',
    description: 'Flujos de trabajo inteligentes con n8n e IA. Eliminá tareas repetitivas y escalá sin contratar más personal.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
