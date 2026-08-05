/**
 * Configuración central de las 5 marcas del holding.
 *
 * Cada landing (`app/brands/<slug>/page.tsx`) toma su config de acá y la pasa
 * a <BrandLanding />, así el diseño se mantiene consistente y una mejora
 * visual impacta en las 5 marcas a la vez.
 *
 * ⚠️ ANTES DE PUBLICAR: reemplazar los testimonios, las métricas de `stats`,
 * los teléfonos y los links de redes por datos reales. Los valores actuales
 * son de ejemplo para poder ver el diseño terminado.
 */

export type Plan = {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

export type Brand = {
  slug: string;
  name: string;
  initials: string;
  emoji: string;
  /** Color principal de la marca (hex) */
  color: string;
  /** Variante oscura para hovers y gradientes */
  colorDark: string;
  /** Variante clara para el degradado del titular */
  colorLight: string;

  hubDesc: string;
  tagline: string;

  badge: string;
  h1: string;
  h1Highlight: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;

  stats: { value: string; label: string }[];

  servicesTitle: string;
  servicesSub: string;
  services: { icon: string; title: string; desc: string }[];

  plansTitle: string;
  plansSub: string;
  plans: Plan[];

  testimonials: { name: string; role: string; text: string }[];

  faqs: { q: string; a: string }[];

  formTitle: string;
  formSub: string;
  formCta: string;
  formNote: string;
  selectLabel: string;
  selectOptions: { value: string; label: string }[];

  email: string;
  navLinks: { href: string; label: string }[];
};

/** Número de WhatsApp del holding — reemplazar por el real (formato internacional, sin +) */
export const WHATSAPP = '5491100000000';

export const brands: Record<string, Brand> = {
  instalait: {
    slug: 'instalait',
    name: 'InstalaIT',
    initials: 'IT',
    emoji: '🔧',
    color: '#f97316',
    colorDark: '#ea580c',
    colorLight: '#fdba74',

    hubDesc: 'WiFi profesional, cámaras IP y control de acceso para tu local.',
    tagline: 'Soluciones tecnológicas integrales para locales y oficinas.',

    badge: '📍 Instalamos en CABA y GBA',
    h1: 'Tu local con WiFi 6 y cámaras 4K',
    h1Highlight: 'instalados en 3 días',
    sub: 'WiFi profesional, cámaras de seguridad, control de acceso y app integrada. Una sola visita, todo funcionando.',
    ctaPrimary: 'Pedir presupuesto',
    ctaSecondary: 'Ver planes',

    stats: [
      { value: '+120', label: 'Instalaciones' },
      { value: '3 días', label: 'Plazo promedio' },
      { value: '4.9★', label: 'Satisfacción' },
      { value: '24/7', label: 'Soporte' },
    ],

    servicesTitle: 'Todo lo que instalamos',
    servicesSub: 'Un solo proveedor para toda la infraestructura tecnológica de tu local.',
    services: [
      { icon: 'wifi', title: 'WiFi Profesional', desc: 'Cobertura total sin zonas muertas y velocidad garantizada por contrato.' },
      { icon: 'camera', title: 'Cámaras IP 4K', desc: 'Vigilancia 24/7 con acceso en vivo desde tu celular, estés donde estés.' },
      { icon: 'fingerprint', title: 'Control de Acceso', desc: 'Biométrico o tarjeta RFID, con registro de entradas y salidas.' },
      { icon: 'smartphone', title: 'App de Control', desc: 'Gestionás cámaras, accesos y red desde una sola aplicación.' },
    ],

    plansTitle: 'Planes de instalación',
    plansSub: 'Precio cerrado, sin sorpresas. Incluye materiales, mano de obra y puesta en marcha.',
    plans: [
      {
        name: 'Básico',
        price: '$1.200',
        desc: 'Para locales chicos que arrancan.',
        features: ['WiFi 6 profesional', '2 cámaras IP', 'Cableado Cat6', 'App básica', 'Soporte 30 días'],
        highlight: false,
        cta: 'Solicitar',
      },
      {
        name: 'Estándar',
        price: '$1.800',
        desc: 'El más elegido por comercios y consultorios.',
        features: ['WiFi 6 profesional', '4 cámaras IP 4K', 'Cableado Cat6', 'App avanzada', 'Soporte 90 días', 'Backup en la nube'],
        highlight: true,
        cta: 'Solicitar',
      },
      {
        name: 'Premium',
        price: '$3.000',
        desc: 'Cobertura completa para locales grandes.',
        features: ['WiFi 6 + Mesh', '8 cámaras IP 4K', 'Control de acceso', 'App + ePOS', 'Soporte 1 año', 'Backup + Analytics', 'Parlantes integrados'],
        highlight: false,
        cta: 'Solicitar',
      },
    ],

    testimonials: [
      { name: 'Martín Rodríguez', role: 'Dueño · Barbería Norte', text: 'Vinieron un martes y el jueves ya tenía todo andando. Las cámaras las veo desde el celular cuando no estoy en el local.' },
      { name: 'Carolina Méndez', role: 'Consultorio Odontológico', text: 'El WiFi anterior se caía todo el tiempo y perdíamos turnos. Desde la instalación no tuvimos un solo corte.' },
      { name: 'Diego Fernández', role: 'Local gastronómico', text: 'Presupuesto claro desde el día uno. No apareció ningún costo extra al final, que es lo que más miedo me daba.' },
    ],

    faqs: [
      { q: '¿Cuánto tiempo demora la instalación?', a: 'Entre 2 y 5 días según el plan. Coordinamos para trabajar en horarios que no interrumpan tu operación.' },
      { q: '¿Incluye mantenimiento?', a: 'Los primeros 30 a 90 días están incluidos según el plan. Después podés sumar el plan de mantenimiento desde $150/mes.' },
      { q: '¿Qué pasa si algo falla?', a: 'Tenés soporte 24/7 por WhatsApp y Telegram. Resolvemos en menos de 2 horas o vamos al local sin cargo.' },
      { q: '¿Es escalable?', a: 'Totalmente. Podés sumar cámaras, puntos de acceso o dispositivos cuando lo necesites, reutilizando la infraestructura instalada.' },
      { q: '¿Trabajan fuera de Buenos Aires?', a: 'Nuestra cobertura sin cargo es CABA y GBA. Para otras zonas cotizamos el viático aparte, escribinos y lo vemos.' },
    ],

    formTitle: 'Solicitá tu presupuesto',
    formSub: 'Contanos de tu local y te mandamos una cotización cerrada en menos de 24 horas.',
    formCta: 'Enviar solicitud',
    formNote: 'Sin compromiso · Respondemos en menos de 24 horas',
    selectLabel: 'Seleccioná tu tipo de negocio',
    selectOptions: [
      { value: 'peluqueria', label: 'Peluquería / Barbería' },
      { value: 'consultorio', label: 'Consultorio / Clínica' },
      { value: 'local', label: 'Local comercial' },
      { value: 'gastronomia', label: 'Bar / Restaurante' },
      { value: 'oficina', label: 'Oficina' },
      { value: 'otro', label: 'Otro' },
    ],

    email: 'info@instalait.com.ar',
    navLinks: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#planes', label: 'Planes' },
      { href: '#opiniones', label: 'Opiniones' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  techsoporte: {
    slug: 'techsoporte',
    name: 'TechSoporte',
    initials: 'TS',
    emoji: '🆘',
    color: '#10b981',
    colorDark: '#059669',
    colorLight: '#6ee7b7',

    hubDesc: 'Soporte técnico 24/7 para PyMEs. Remoto o presencial.',
    tagline: 'Tu equipo de sistemas, sin contratar empleados.',

    badge: '⚡ Respondemos en menos de 2 horas',
    h1: 'Tu equipo de IT completo',
    h1Highlight: 'por menos que un empleado',
    sub: 'Soporte técnico 24/7 remoto y presencial para PyMEs. Sin contratos largos, sin letra chica, cancelás cuando quieras.',
    ctaPrimary: 'Empezar 7 días gratis',
    ctaSecondary: 'Ver planes',

    stats: [
      { value: '< 2h', label: 'Tiempo de respuesta' },
      { value: '+80', label: 'Empresas atendidas' },
      { value: '99.4%', label: 'Tickets resueltos' },
      { value: '24/7', label: 'Disponibilidad' },
    ],

    servicesTitle: '¿Qué resolvemos?',
    servicesSub: 'Desde la impresora que no anda hasta la migración completa de tus servidores.',
    services: [
      { icon: 'monitor', title: 'Soporte Remoto', desc: 'Nos conectamos en minutos y resolvemos sin que nadie tenga que moverse.' },
      { icon: 'wrench', title: 'Mantenimiento', desc: 'Preventivo mensual para que las cosas no se rompan justo cuando más las necesitás.' },
      { icon: 'server', title: 'Redes y Servidores', desc: 'Configuración, optimización y monitoreo continuo de toda tu infraestructura.' },
      { icon: 'headphones', title: 'Mesa de Ayuda', desc: 'Un canal directo donde todo tu equipo puede pedir ayuda y hacer seguimiento.' },
    ],

    plansTitle: 'Planes de soporte',
    plansSub: 'Mensuales, sin permanencia mínima. Cambiás o cancelás cuando quieras.',
    plans: [
      {
        name: 'Básico',
        price: '$299',
        period: '/mes',
        desc: 'Para equipos chicos que recién arrancan.',
        features: ['Soporte remoto', 'Hasta 5 usuarios', 'Respuesta en 4 hs', 'Chat y email', 'Reporte mensual'],
        highlight: false,
        cta: 'Empezar gratis',
      },
      {
        name: 'Estándar',
        price: '$599',
        period: '/mes',
        desc: 'La opción que elige el 70% de nuestros clientes.',
        features: ['Soporte remoto + presencial', 'Hasta 15 usuarios', 'Respuesta en 2 hs', 'Chat, email y teléfono', 'Mantenimiento preventivo', 'Reporte semanal'],
        highlight: true,
        cta: 'Empezar gratis',
      },
      {
        name: 'Premium',
        price: '$999',
        period: '/mes',
        desc: 'Cobertura total con dirección técnica incluida.',
        features: ['Soporte ilimitado', 'Usuarios ilimitados', 'Respuesta en 30 min', 'Canal dedicado', 'Monitoreo proactivo', 'SLA garantizado', 'CTO as a Service'],
        highlight: false,
        cta: 'Hablar con ventas',
      },
    ],

    testimonials: [
      { name: 'Laura Giménez', role: 'Gerente · Distribuidora Sur', text: 'Teníamos un técnico que venía cuando podía. Ahora escribimos y en veinte minutos ya está alguien conectado resolviendo.' },
      { name: 'Sebastián Ruiz', role: 'Socio · Estudio contable', text: 'En época de balances no podemos parar. Nos cubrieron un sábado a la noche sin que tuviéramos que rogar.' },
      { name: 'Andrea Costa', role: 'Fundadora · Startup logística', text: 'El plan Premium nos da un CTO part-time por mucho menos de lo que cuesta contratar uno. Para nuestro tamaño es ideal.' },
    ],

    faqs: [
      { q: '¿En cuánto tiempo responden?', a: 'Según el plan: 30 minutos, 2 horas o 4 horas. Los casos que frenan la operación siempre saltan al principio de la fila.' },
      { q: '¿Atienden fines de semana?', a: 'Sí, el soporte es 24/7/365 incluyendo feriados. Tu negocio no para y nosotros tampoco.' },
      { q: '¿Necesito firmar un contrato largo?', a: 'No. Los planes son mensuales y podés cancelar cuando quieras sin penalidad ni preaviso.' },
      { q: '¿Cómo funciona la prueba gratis?', a: 'Tenés 7 días completos con el plan que elijas, sin cargar tarjeta. Si no te sirve, no pagás nada.' },
      { q: '¿Qué pasa si necesito soporte presencial?', a: 'Los planes Estándar y Premium incluyen visitas en CABA y GBA. Otras zonas se cotizan aparte.' },
    ],

    formTitle: 'Empezá tus 7 días gratis',
    formSub: 'Sin tarjeta de crédito. Te damos de alta el mismo día y arrancás a usarlo.',
    formCta: 'Solicitar prueba gratis',
    formNote: 'Sin tarjeta · Sin permanencia · Alta el mismo día',
    selectLabel: 'Seleccioná tu tipo de empresa',
    selectOptions: [
      { value: 'pyme', label: 'PyME (1-20 empleados)' },
      { value: 'mediana', label: 'Empresa mediana (20-100)' },
      { value: 'startup', label: 'Startup / Emprendimiento' },
      { value: 'consultora', label: 'Consultora / Estudio' },
      { value: 'otro', label: 'Otro' },
    ],

    email: 'info@techsoporte.com.ar',
    navLinks: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#planes', label: 'Planes' },
      { href: '#opiniones', label: 'Opiniones' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  automata: {
    slug: 'automata',
    name: 'AutomataAI',
    initials: 'AI',
    emoji: '🤖',
    color: '#7c3aed',
    colorDark: '#6d28d9',
    colorLight: '#c4b5fd',

    hubDesc: 'Automatización de procesos con n8n e inteligencia artificial.',
    tagline: 'Automatización B2B con n8n e inteligencia artificial.',

    badge: '⚡ +400 apps integrables',
    h1: 'Dejá de hacer a mano',
    h1Highlight: 'lo que puede hacerse solo',
    sub: 'Conectamos tus herramientas con flujos n8n e IA. Nuestros clientes ahorran en promedio 15 horas por semana en tareas repetitivas.',
    ctaPrimary: 'Agendar demo de 30 min',
    ctaSecondary: 'Ver casos de uso',

    stats: [
      { value: '15 hs', label: 'Ahorradas por semana' },
      { value: '+400', label: 'Apps integrables' },
      { value: '5 días', label: 'Primer flujo andando' },
      { value: '+60', label: 'Automatizaciones activas' },
    ],

    servicesTitle: '¿Qué automatizamos?',
    servicesSub: 'Si es repetitivo y pasa por una pantalla, probablemente podamos automatizarlo.',
    services: [
      { icon: 'zap', title: 'Flujos n8n', desc: 'Procesos que conectan tus apps entre sí y corren solos, sin intervención.' },
      { icon: 'link', title: 'Integraciones API', desc: 'Unimos tu CRM, ERP, e-commerce y planillas para que hablen el mismo idioma.' },
      { icon: 'bot', title: 'Agentes IA', desc: 'Bots que leen, entienden, responden y ejecutan acciones por vos.' },
      { icon: 'chart', title: 'Reportes Automáticos', desc: 'Dashboards que se actualizan solos y llegan a tu bandeja cada mañana.' },
    ],

    plansTitle: 'Planes de automatización',
    plansSub: 'Implementación llave en mano. Vos describís el proceso, nosotros lo construimos.',
    plans: [
      {
        name: 'Starter',
        price: '$800',
        desc: 'Para probar el impacto con un proceso concreto.',
        features: ['1 flujo n8n', 'Hasta 3 integraciones', '5.000 ejecuciones/mes', 'Soporte por email', 'Documentación incluida'],
        highlight: false,
        cta: 'Empezar',
      },
      {
        name: 'Pro',
        price: '$1.800',
        desc: 'Para automatizar un área completa del negocio.',
        features: ['5 flujos n8n', 'Integraciones ilimitadas', '50.000 ejecuciones/mes', 'Agente IA incluido', 'Soporte prioritario', 'Optimizaciones mensuales'],
        highlight: true,
        cta: 'Empezar',
      },
      {
        name: 'Enterprise',
        price: 'A medida',
        desc: 'Infraestructura propia y equipo dedicado.',
        features: ['Flujos ilimitados', 'Infraestructura propia', 'Ejecuciones ilimitadas', 'Múltiples agentes IA', 'SLA garantizado', 'Equipo dedicado', 'Capacitación al equipo'],
        highlight: false,
        cta: 'Agendar llamada',
      },
    ],

    testimonials: [
      { name: 'Nicolás Vega', role: 'E-commerce de indumentaria', text: 'Cada venta generaba tres tareas manuales. Ahora se factura, se avisa al depósito y se manda el mail solo. Recuperamos una persona full time.' },
      { name: 'Paula Serrano', role: 'Inmobiliaria', text: 'Las consultas de la web se perdían entre mails. Ahora entran a WhatsApp con turno asignado y recordatorio automático.' },
      { name: 'Javier Molina', role: 'Consultorio médico', text: 'La confirmación de turnos nos comía dos horas diarias. Hoy es cero. Los ausentes bajaron un 40% con los recordatorios.' },
    ],

    faqs: [
      { q: '¿Necesito saber programar?', a: 'Para nada. Vos describís el proceso como se lo explicarías a un empleado nuevo, y nosotros lo construimos.' },
      { q: '¿Cuánto tarda una automatización?', a: 'Un flujo simple entre 3 y 5 días. Proyectos con IA, de 2 a 4 semanas, siempre con demos de avance en el medio.' },
      { q: '¿Qué herramientas integran?', a: 'WhatsApp, Gmail, Google Sheets, Notion, Slack, HubSpot, Shopify, MercadoLibre y más de 400 apps vía n8n. Si tiene API, se integra.' },
      { q: '¿Qué pasa si algo deja de funcionar?', a: 'Todos los planes incluyen monitoreo proactivo. Nos enteramos y lo arreglamos antes de que lo notes.' },
      { q: '¿Los flujos quedan míos?', a: 'Sí. Te entregamos los flujos documentados y podés llevártelos a tu propia instancia cuando quieras.' },
    ],

    formTitle: 'Agendá tu demo gratuita',
    formSub: 'En 30 minutos te mostramos, en vivo, una automatización aplicada a tu negocio.',
    formCta: 'Solicitar demo gratis',
    formNote: 'Demo de 30 min · Sin compromiso · 100% aplicada a tu caso',
    selectLabel: '¿Qué querés automatizar?',
    selectOptions: [
      { value: 'ventas', label: 'Ventas y CRM' },
      { value: 'atencion', label: 'Atención al cliente' },
      { value: 'finanzas', label: 'Finanzas y reportes' },
      { value: 'marketing', label: 'Marketing y leads' },
      { value: 'operaciones', label: 'Operaciones internas' },
      { value: 'otro', label: 'Otro' },
    ],

    email: 'info@automataai.com.ar',
    navLinks: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#casos', label: 'Casos de uso' },
      { href: '#planes', label: 'Planes' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  miasistente: {
    slug: 'miasistente',
    name: 'MiAsistente',
    initials: 'MA',
    emoji: '👤',
    color: '#3b82f6',
    colorDark: '#2563eb',
    colorLight: '#93c5fd',

    hubDesc: 'Asistente IA personal para emprendedores y profesionales.',
    tagline: 'El asistente IA que conoce tu agenda, tu tono y tus prioridades.',

    badge: '✨ Gratis para siempre · Sin tarjeta',
    h1: 'Un asistente IA',
    h1Highlight: 'que sí te conoce',
    sub: 'Agendá reuniones, respondé mensajes y entendé tus números hablándole como a una persona. Conectado a tus apps, con tu estilo.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver cómo funciona',

    stats: [
      { value: '$0', label: 'Plan gratuito' },
      { value: '10 seg', label: 'Respuesta promedio' },
      { value: '+2.400', label: 'Usuarios activos' },
      { value: '4.8★', label: 'Valoración' },
    ],

    servicesTitle: '¿Qué puede hacer?',
    servicesSub: 'No es un chat más: está conectado a tus herramientas y actúa sobre ellas.',
    services: [
      { icon: 'calendar', title: 'Agenda Inteligente', desc: 'Coordina reuniones, evita superposiciones y te avisa qué es lo urgente del día.' },
      { icon: 'message', title: 'Respuestas Automáticas', desc: 'Contesta WhatsApp, email e Instagram imitando tu tono, no un robot genérico.' },
      { icon: 'trending', title: 'Análisis de Datos', desc: 'Convierte tus planillas y métricas en conclusiones claras, en segundos.' },
      { icon: 'plug', title: 'Integraciones', desc: 'Se conecta con Google, Notion, Slack, WhatsApp y las apps que ya usás.' },
    ],

    plansTitle: 'Planes simples',
    plansSub: 'Empezá gratis y pasá a Pro sólo cuando el asistente ya sea parte de tu día.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: '/mes',
        desc: 'Para probarlo sin poner un peso.',
        features: ['1 asistente IA', '100 consultas por mes', 'Integración con Google', 'Resumen diario', 'App web y móvil'],
        highlight: false,
        cta: 'Crear cuenta gratis',
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/mes',
        desc: 'Para quien lo usa todos los días.',
        features: ['Asistente personalizado', 'Consultas ilimitadas', 'Todas las integraciones', 'Respuestas automáticas', 'Análisis avanzado', 'Soporte prioritario'],
        highlight: true,
        cta: 'Empezar 14 días gratis',
      },
      {
        name: 'Team',
        price: '$79',
        period: '/mes',
        desc: 'Para equipos que comparten contexto.',
        features: ['Hasta 5 asistentes', 'Consultas ilimitadas', 'Panel de equipo', 'Flujos compartidos', 'Acceso a la API', 'Onboarding guiado', 'SLA garantizado'],
        highlight: false,
        cta: 'Hablar con ventas',
      },
    ],

    testimonials: [
      { name: 'Florencia Aguirre', role: 'Diseñadora freelance', text: 'Le pido que me resuma los mails del día y me arme la agenda. Recuperé la primera hora de la mañana entera.' },
      { name: 'Tomás Beltrán', role: 'Director comercial', text: 'Responde consultas repetidas con mi tono. Los clientes no notan la diferencia y yo contesto la mitad de mensajes.' },
      { name: 'Rocío Sánchez', role: 'Emprendedora', text: 'Probé ChatGPT antes pero tenía que explicarle todo cada vez. Este ya sabe cómo trabajo y con quién.' },
    ],

    faqs: [
      { q: '¿En qué se diferencia de ChatGPT?', a: 'ChatGPT arranca de cero en cada conversación. MiAsistente conoce tu agenda, tus contactos, tu tono y recuerda lo que hablaron la semana pasada, además de poder actuar sobre tus apps.' },
      { q: '¿El asistente aprende de mí?', a: 'Sí. Cuanto más lo usás, mejor entiende tu estilo de escritura, tus prioridades y cómo te gusta trabajar.' },
      { q: '¿Mis datos están seguros?', a: 'Tus datos son tuyos. Usamos cifrado de extremo a extremo y nunca los vendemos ni los usamos para entrenar modelos de terceros.' },
      { q: '¿Funciona bien en español?', a: 'Está optimizado para español rioplatense, incluyendo modismos y contexto local. No suena traducido.' },
      { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin penalidades. Si cancelás, conservás el acceso hasta que termine el período que ya pagaste.' },
    ],

    formTitle: 'Creá tu cuenta gratis',
    formSub: 'Sin tarjeta de crédito. En dos minutos ya estás hablando con tu asistente.',
    formCta: 'Crear cuenta gratis',
    formNote: 'Sin tarjeta de crédito · Plan gratuito para siempre',
    selectLabel: '¿Cómo lo vas a usar?',
    selectOptions: [
      { value: 'emprendedor', label: 'Emprendedor / Freelance' },
      { value: 'ejecutivo', label: 'Ejecutivo / Manager' },
      { value: 'equipo', label: 'Para mi equipo' },
      { value: 'personal', label: 'Uso personal' },
      { value: 'otro', label: 'Otro' },
    ],

    email: 'hola@miasistente.app',
    navLinks: [
      { href: '#servicios', label: 'Funciones' },
      { href: '#planes', label: 'Planes' },
      { href: '#opiniones', label: 'Opiniones' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  webstudio: {
    slug: 'webstudio',
    name: 'WebStudio',
    initials: 'WS',
    emoji: '🌐',
    color: '#0ea5e9',
    colorDark: '#0284c7',
    colorLight: '#7dd3fc',

    hubDesc: 'Desarrollo web y e-commerce profesional a medida.',
    tagline: 'Desarrollo web profesional para negocios que quieren crecer online.',

    badge: '🚀 Entregamos en 7 días',
    h1: 'Tu sitio web listo',
    h1Highlight: 'en 7 días',
    sub: 'Landing pages, tiendas online y sistemas a medida. Diseño propio, carga rápida y dominio con hosting incluido el primer año.',
    ctaPrimary: 'Pedir presupuesto',
    ctaSecondary: 'Ver cómo trabajamos',

    stats: [
      { value: '7 días', label: 'Entrega de landing' },
      { value: '+90', label: 'Proyectos entregados' },
      { value: '98/100', label: 'PageSpeed promedio' },
      { value: '1 año', label: 'Hosting incluido' },
    ],

    servicesTitle: '¿Qué hacemos?',
    servicesSub: 'Desde una landing que convierte hasta un sistema completo a medida.',
    services: [
      { icon: 'palette', title: 'Landing Pages', desc: 'Diseño propio pensado para convertir visitas en consultas reales.' },
      { icon: 'cart', title: 'E-commerce', desc: 'Tiendas con MercadoPago, gestión de stock y cálculo de envíos integrado.' },
      { icon: 'code', title: 'Apps Web', desc: 'Sistemas a medida: reservas, turnos, portales de clientes y paneles internos.' },
      { icon: 'search', title: 'SEO', desc: 'Optimización técnica y de contenido para que Google te encuentre primero.' },
    ],

    plansTitle: 'Planes',
    plansSub: 'Precio cerrado antes de arrancar. Sin sorpresas a mitad del proyecto.',
    plans: [
      {
        name: 'Landing',
        price: '$600',
        desc: 'Una página que convierte, lista en una semana.',
        features: ['Diseño a medida', '1 página optimizada', 'Formulario de contacto', 'Responsive + SEO base', 'Entrega en 7 días', 'Dominio + hosting 1 año'],
        highlight: false,
        cta: 'Cotizar',
      },
      {
        name: 'E-commerce',
        price: '$1.500',
        desc: 'Tienda completa lista para vender.',
        features: ['Tienda completa', 'Hasta 100 productos', 'MercadoPago integrado', 'Panel de gestión', 'SEO avanzado', 'Entrega en 15 días', 'Soporte 6 meses'],
        highlight: true,
        cta: 'Cotizar',
      },
      {
        name: 'A medida',
        price: 'Custom',
        desc: 'Sistemas complejos con lógica propia.',
        features: ['App web completa', 'Base de datos propia', 'Login y roles de usuario', 'Integraciones API', 'Mantenimiento incluido', 'Equipo dedicado', 'SLA garantizado'],
        highlight: false,
        cta: 'Agendar llamada',
      },
    ],

    testimonials: [
      { name: 'Gabriel Ortiz', role: 'Dueño · Tienda de deportes', text: 'Pasamos de vender sólo por Instagram a tener tienda propia. El primer mes ya justificó lo que pagamos.' },
      { name: 'Valentina Ríos', role: 'Estudio de arquitectura', text: 'El diseño nos lo mostraron antes de programar nada. Pedimos dos cambios y listo, sin idas y vueltas eternas.' },
      { name: 'Marcos Duarte', role: 'Centro de estética', text: 'El sistema de turnos online nos sacó las reservas por teléfono. La recepcionista ahora atiende gente, no llamadas.' },
    ],

    faqs: [
      { q: '¿Cuánto tarda el desarrollo?', a: 'Landing en 7 días, e-commerce en 15. Los proyectos a medida dependen del alcance, pero siempre con cronograma cerrado antes de empezar.' },
      { q: '¿Puedo ver avances antes de la entrega?', a: 'Sí. Revisiones cada 3 a 5 días y un link de preview activo durante todo el desarrollo.' },
      { q: '¿Incluye el hosting?', a: 'El plan Landing incluye dominio y hosting el primer año. Los otros usan infraestructura en la nube que configuramos y dejamos a tu nombre.' },
      { q: '¿Qué pasa después de la entrega?', a: 'Podés sumar mantenimiento mensual desde $200 o contratar horas sueltas para cambios puntuales.' },
      { q: '¿El sitio queda a mi nombre?', a: 'Siempre. Dominio, hosting y código quedan bajo tu titularidad desde el día de la entrega.' },
    ],

    formTitle: 'Cotizá tu proyecto',
    formSub: 'Contanos qué necesitás y te mandamos una propuesta con precio y plazo cerrados.',
    formCta: 'Solicitar cotización',
    formNote: 'Presupuesto sin cargo · Respondemos en menos de 24 horas',
    selectLabel: '¿Qué necesitás?',
    selectOptions: [
      { value: 'landing', label: 'Landing page' },
      { value: 'ecommerce', label: 'Tienda online / E-commerce' },
      { value: 'app', label: 'App web / Sistema a medida' },
      { value: 'rediseno', label: 'Rediseño de sitio existente' },
      { value: 'seo', label: 'SEO / Posicionamiento' },
      { value: 'otro', label: 'Otro' },
    ],

    email: 'hola@webstudio.com.ar',
    navLinks: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#proceso', label: 'Proceso' },
      { href: '#planes', label: 'Planes' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
};

export const brandList = Object.values(brands);
