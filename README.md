# VSB Landing MVP (Next.js + Tailwind)

**Objetivo del Paso 1**: landing funcional para captar clientes con CTA a WhatsApp y Email. Sin base de datos.

## Requisitos
- Node 18+
- Una cuenta de GitHub y Vercel (crearlas a nombre del cliente; ver checklist de propiedad).

## Instalación
```bash
npm install
npm run dev
```

## Variables de entorno
Crea `.env.local` con:
```env
NEXT_PUBLIC_WHATSAPP=5492990000000
NEXT_PUBLIC_CONTACT_EMAIL=contacto@vsbservicios.com
```

## Deploy
1. Subí este repo a GitHub (organización del cliente: `vsb-servicios` por ejemplo).
2. Importá el repo en Vercel (organización del cliente).
3. Configurá las variables de entorno en Vercel.
4. Deploy.

## Qué incluye
- **Home** con hero, grid de servicios y CTAs
- **/services** con tarjetas y CTA directo por WhatsApp
- **/contact** con envío por WhatsApp o Email (mailto)
- **Tailwind** ya configurado, tema oscuro simple

## Próximos pasos (cuando el cliente apruebe)
- Formulario con archivos e inbox propio (por ejemplo: Resend + S3/Supabase)
- Panel interno con autenticación
- Galería “antes/después”
```
