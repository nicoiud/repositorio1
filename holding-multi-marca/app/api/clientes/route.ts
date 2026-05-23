import { NextRequest, NextResponse } from 'next/server';

async function notificarTelegram(lead: {
  nombre: string;
  email: string;
  telefono: string;
  ubicacion?: string;
  tipo_negocio?: string;
  marca: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  const marcaEmoji: Record<string, string> = {
    instalait: '🔧',
    techsoporte: '🆘',
    automata: '🤖',
    miasistente: '👤',
    webstudio: '🌐',
  };

  const mensaje = `
${marcaEmoji[lead.marca] ?? '📋'} *Nuevo lead — ${lead.marca.toUpperCase()}*

👤 *Nombre:* ${lead.nombre}
📧 *Email:* ${lead.email}
📱 *Teléfono:* ${lead.telefono}
📍 *Ubicación:* ${lead.ubicacion || 'No indicada'}
🏢 *Tipo de negocio:* ${lead.tipo_negocio || 'No indicado'}
  `.trim();

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: mensaje,
      parse_mode: 'Markdown',
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, ubicacion, tipo_negocio, marca } = body;

    if (!nombre || !email || !telefono) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // TODO: conectar a Supabase
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    // await supabase.from('clientes').insert({ nombre, email, telefono, ubicacion, tipo_negocio, marca });

    await notificarTelegram({ nombre, email, telefono, ubicacion, tipo_negocio, marca });

    return NextResponse.json({ success: true, mensaje: 'Lead registrado correctamente' });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
