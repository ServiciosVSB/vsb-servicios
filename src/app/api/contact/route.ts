// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactEmailHTML, contactEmailText } from '@/emails/contactTemplate';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, message, email } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { error: 'Config de servidor incompleta' },
        { status: 500 }
      );
    }

    // Usamos siempre SITE_URL (tu subdominio de Vercel)
    const baseUrl = (process.env.SITE_URL || '').replace(/\/$/, '');
    const logoUrl = baseUrl ? `${baseUrl}/logo.png` : undefined;

    const replyTo = email && /\S+@\S+\.\S+/.test(email) ? email : undefined;

    const html = contactEmailHTML({ name, email, message, logoUrl });
    const text = contactEmailText({ name, email, message });

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Nueva solicitud de presupuesto — ${name}`,
      replyTo,
      html,
      text,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json(
        { error: (error as any)?.message || 'No se pudo enviar' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error('[contact] exception:', e?.message || e);
    return NextResponse.json({ error: 'Error inesperado' }, { status: 500 });
  }
}
