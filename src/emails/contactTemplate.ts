// src/emails/contactTemplate.ts
const BRAND = '#3F48CC';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#6B7280';
const CARD_BG = '#ffffff';
const PAGE_BG = '#f6f8fa';
const BORDER = '#E5E7EB';

function esc(s: string) {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function contactEmailText(params: {
  name: string;
  email?: string;
  message: string;
}) {
  const { name, email, message } = params;
  return [
    `Nueva solicitud de presupuesto`,
    `Nombre: ${name}`,
    `Email: ${email || 'N/D'}`,
    ``,
    `Mensaje:`,
    message || '',
    ``,
    `— Enviado desde VSB Servicios`,
  ].join('\n');
}

export function contactEmailHTML(params: {
  name: string;
  email?: string;
  message: string;
  logoUrl?: string; // absoluta: https://.../logo.png
}) {
  const { name, email, message, logoUrl } = params;
  const fallback = (process.env.SITE_URL || '').replace(/\/$/, '');
  const finalLogo = logoUrl || (fallback ? `${fallback}/logo.png` : '');
  const logoImg = finalLogo
    ? `<img src="${finalLogo}" alt="VSB Servicios" width="40" height="40" style="display:block;border:0;outline:none;">`
    : '';
  return `
  <!doctype html>
  <html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Nueva solicitud de presupuesto</title>
  </head>
  <body style="margin:0;padding:0;background:${PAGE_BG};">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${PAGE_BG};padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width:600px;max-width:100%;background:${CARD_BG};border:1px solid ${BORDER};border-radius:12px;overflow:hidden;font-family:Roboto,Arial,Helvetica,sans-serif;color:${TEXT_DARK}">
            <tr>
              <td style="background:${BRAND};padding:14px 18px;color:#fff;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="44" valign="middle">${logoImg}</td>
                    <td valign="middle" style="padding-left:8px;font-size:16px;font-weight:600;letter-spacing:.2px;">
                      Nueva solicitud de presupuesto
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 22px 4px 22px;">
                <div style="font-size:16px;line-height:24px;">
                  <strong>Nombre:</strong> ${esc(name)}
                </div>
                <div style="margin-top:4px;font-size:14px;color:${TEXT_MUTED};">
                  <strong>Email:</strong> ${email ? esc(email) : 'N/D'}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 22px 20px 22px;">
                <div style="font-size:14px;color:${TEXT_MUTED};margin-bottom:6px;">
                  Mensaje:
                </div>
                <div style="font-size:15px;line-height:22px;border:1px solid ${BORDER};border-radius:8px;padding:14px;">
                  ${esc(message).replace(/\n/g, '<br/>')}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 22px 18px 22px;border-top:1px solid ${BORDER};">
                <div style="font-size:12px;color:${TEXT_MUTED};">
                  Responder directamente a este correo (Reply-To) para contactar al cliente.
                  <br/>— VSB Servicios
                </div>
              </td>
            </tr>
          </table>
          <div style="height:24px;line-height:24px;">&nbsp;</div>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
