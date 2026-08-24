# Miquel Suay - Landings de Captación

Proyecto de landing pages estáticas (Hombre/Novio y Mujer/Ceremonia) desarrolladas con Vite, React y TypeScript, preparadas para ser alojadas en Cloudways u otros servidores estáticos sin necesidad de Node.js.

## Estructura del Proyecto

```text
/
├── public/                 # Assets estáticos, robots.txt, sitemap, llms.txt
├── docs/                   # Checklists y estado de los contenidos pendientes
├── src/
│   ├── components/         # Componentes React (CSS Modules)
│   ├── content/            # Configuración y assets (image-manifest.ts)
│   ├── pages/              # Entradas principales de cada landing
│   ├── styles/             # CSS Global, tokens de diseño
│   └── utils/              # Capa de analítica neutral
├── index.html              # Punto de entrada raíz (Distribuidor)
├── novio/index.html        # Punto de entrada estático para la landing Hombre
├── mujer/index.html        # Punto de entrada estático para la landing Mujer
└── vite.config.ts          # Configuración Multi-Page de Vite
```

## Desarrollo (Local)

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar entorno local:
   ```bash
   npm run dev
   ```

El proyecto estará disponible típicamente en `http://localhost:5173/`. 
Las landings estarán en:
- `http://localhost:5173/novio/`
- `http://localhost:5173/mujer/`

## Producción (Build Estático)

Para compilar el proyecto y generar los archivos para Cloudways:

```bash
npm run build
```

Esto generará la carpeta `dist/` con la siguiente estructura interna (lista para servidor web estático):
- `dist/index.html`
- `dist/novio/index.html`
- `dist/mujer/index.html`
- `dist/assets/...` (Archivos JS, CSS y media hasheados)

## Checklist previo a despliegue

1. **Placeholder de imágenes:** Revisar `src/content/image-manifest.ts` y sustituir las rutas vacías.
2. **Formulario:** Integrar el endpoint definitivo en `src/components/AppointmentForm`.
3. **SEO:** Cambiar `robots.txt` a modo producción y actualizar el `DOMINIO_FINAL` en `sitemap.xml`.
4. **Copy Legal:** Actualizar `LegalFooter` con los enlaces correctos.
