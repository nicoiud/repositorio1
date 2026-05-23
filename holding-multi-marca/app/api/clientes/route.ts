import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, ubicacion, tipo_negocio, marca } = body;

    if (!nombre || !email || !telefono) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // TODO: conectar a Supabase
    // const { data, error } = await supabase.from('clientes').insert({ ... })

    console.log('Nuevo lead:', { nombre, email, telefono, ubicacion, tipo_negocio, marca });

    return NextResponse.json({ success: true, mensaje: 'Lead registrado correctamente' });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
