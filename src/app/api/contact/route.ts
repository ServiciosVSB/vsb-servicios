import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // asegura runtime Node para librerías que usan nodemailer, etc.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, message, email } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    // (opcional) validar formato de email si viene desde el cliente
    const replyTo = email && /\S+@\S+\.\S+/.test(email) ? email : undefined;

    const { data, error } = await resend.emails.send({
      from,
      to, // puede ser string o string[]
      subject: `Nueva solicitud de presupuesto — ${name}`,
      replyTo, // <-- FIX: camelCase
      text: `Nombre: ${name}\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p>${(
        message || ''
      ).replace(/\n/g, '<br/>')}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'No se pudo enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error('API /contact error:', e);
    return NextResponse.json({ error: 'Error inesperado' }, { status: 500 });
  }
}
