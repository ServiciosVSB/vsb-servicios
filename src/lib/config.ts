export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';

export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? '';

export function waLink(text: string) {
  return WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
    : '/contact';
}

export function mailtoLink(name: string, message: string) {
  const subject = 'Solicitud de presupuesto';
  const body = `Hola, soy ${name}. ${message}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
