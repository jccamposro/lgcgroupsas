# Sitio web — LGC Accounting Group SAS

Sitio corporativo estático (HTML + CSS + JS, sin build) para
**LGC Accounting Group SAS** — asesoría y acompañamiento contable.
Pensado para desplegarse en **Cloudflare Pages**.

## Estructura

```
site/
├─ index.html        # Página única con todas las secciones
├─ styles.css        # Estilos (identidad de marca)
├─ script.js         # Menú móvil, scroll reveal, formulario
├─ robots.txt
├─ sitemap.xml
├─ _headers          # Cabeceras HTTP para Cloudflare Pages
└─ assets/
   ├─ logo-color.png   # Logo oficial (fondo claro)
   ├─ logo-white.png   # Logo versión blanca (footer oscuro)
   ├─ monogram.png     # Monograma LG recortado (marca de agua del hero)
   └─ favicon-180.png  # Favicon (monograma LG real)
```

## Identidad de marca aplicada

- **Colores:** Burdeos `#800000`, Negro `#141414/#000000`, Blanco `#FFFFFF`.
- **Tipografías:** Montserrat (títulos) y Open Sans (texto), con Arial de respaldo.
- Contenido tomado de los documentos de marca y textos oficiales de la empresa.

## Vista local

Es un sitio estático; cualquier servidor sirve. Por ejemplo:

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Desplegar en Cloudflare Pages

### Opción A — Panel de Cloudflare (Git)
1. Suba este repositorio a GitHub/GitLab.
2. En Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configuración de build:
   - **Build command:** *(vacío)*
   - **Build output directory:** `site`
   - Framework preset: **None**
4. Deploy.

### Opción B — Wrangler (línea de comandos)
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy site --project-name=lgc-accounting-group
```

### Opción C — Carga directa
En **Pages → Upload assets**, suba el contenido de la carpeta `site/`.

## Pendientes antes de publicar

- **Número de WhatsApp:** editar `data-phone` en el botón de la sección Contacto
  (`index.html`). Formato internacional, solo dígitos (ej. `573001234567`).
  El enlace `wa.me` se arma solo a partir de ese dato.
- Confirmar el **correo** de contacto (`contacto@lgcgroupsas.com`) en `index.html`.
- El **dominio** `lgcgroupsas.com` ya está configurado en `sitemap.xml`,
  `robots.txt` y las etiquetas `og:*`.
