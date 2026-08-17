# Desplegar en Cloudflare

La web es 100 % estática, así que corre sobre **Workers Static Assets**: Cloudflare
sirve los archivos desde su red sin ejecutar ningún Worker, con lo cual no se
consumen invocaciones ni hay costo de cómputo.

## Primera vez

```bash
npm install
npx wrangler login      # abre el navegador para autorizar la cuenta
npm run deploy
```

Queda publicada en `https://ortopedia-lugano.<tu-subdominio>.workers.dev`.

## Comandos

| Comando            | Qué hace                                                        |
| ------------------ | --------------------------------------------------------------- |
| `npm run dev`      | Desarrollo con Vite (recarga en caliente)                       |
| `npm run cf:dev`   | Sirve el build tal como lo va a servir Cloudflare, con cabeceras |
| `npm run cf:check` | Compila y valida el despliegue sin publicar (`--dry-run`)       |
| `npm run deploy`   | Compila y publica                                               |

Para revisar cómo se comporta en producción antes de publicar, usá `npm run build`
y después `npm run cf:dev`: es el mismo runtime, con el `_headers` aplicado.

## Dominio propio

En el panel de Cloudflare: **Workers & Pages → ortopedia-lugano → Settings →
Domains & Routes → Add → Custom domain**. El dominio tiene que estar en la misma
cuenta. Cloudflare emite el certificado solo.

O declarándolo en `wrangler.jsonc`:

```jsonc
"routes": [{ "pattern": "ortopedialugano.com.uy", "custom_domain": true }]
```

## Deploy automático desde Git

Si más adelante el proyecto va a un repositorio, en **Workers & Pages → Create →
Import a repository** hay que configurar:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Cada push a la rama principal publica solo.

## Qué hace cada archivo

- **`wrangler.jsonc`** — nombre del Worker, carpeta de assets (`dist`) y manejo de
  rutas inexistentes. Está en `404-page` porque hoy la web es una sola página con
  anclas: una URL inventada devuelve un 404 real en lugar de un 200 con la home
  (mejor para SEO). Si algún día se agrega un router en el cliente, hay que
  cambiarlo a `single-page-application`.
- **`public/_headers`** — caché y seguridad. `/assets/*` va con caché de un año
  porque Vite le pone un hash al nombre; `/media/*` va con un día porque los
  nombres de las fotos son fijos y hay que poder reemplazar una imagen sin
  renombrarla. Incluye CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy` y
  `Permissions-Policy`.
- **`public/404.html`** — página de error con la identidad de la marca y salida a
  WhatsApp.

## Si se cambian las fotos

Reemplazá el archivo en `public/media/` conservando el nombre y volvé a desplegar.
Cloudflare sirve la versión nueva en el momento; a quien ya la tenía en el
navegador le llega dentro de las 24 h (`max-age=86400`). Si hace falta que sea
inmediato, cambiale el nombre al archivo y actualizá la referencia en
`src/data/catalogo.ts`.

## Pendiente cuando haya dominio definitivo

- Agregar `public/robots.txt` con la línea `Sitemap:`.
- Cambiar las URLs relativas de `og:image` en `index.html` por absolutas: varias
  redes sociales no resuelven rutas relativas al generar la previsualización.
