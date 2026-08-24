# Checklist de configuración SEO, GEO y AIO

Este documento rastrea el estado de optimización técnica de las landing pages antes de su publicación en producción.

## Meta Etiquetas y Open Graph
- [ ] Titles (Hombre y Mujer configurados).
- [ ] Meta descriptions.
- [ ] Open Graph Images (Pendientes de diseño).
- [ ] Twitter Cards.
- [ ] Canonicals apuntando al `DOMINIO_FINAL`.

## Accesibilidad semántica
- [x] Único H1 por página.
- [x] Jerarquía coherente H2/H3.
- [ ] Atributos Alt en todas las imágenes reales (Placeholder actualmente).

## Metadatos y Estructurados (Schema)
- [ ] JSON-LD `Organization` (Requiere datos oficiales).
- [ ] JSON-LD `WebSite` y `WebPage`.
- [ ] (Opcional) `FAQPage` (Requiere copy final).

## Control de rastreo
- [x] `robots.txt` configurado para Staging (`Disallow: /`).
- [x] `robots.txt` preparado con directrices GEO/AIO (comentado para Producción).
- [x] `sitemap.xml` creado (Requiere cambiar `DOMINIO_FINAL`).
- [x] `llms.txt` creado para crawlers de IA.

## Decisiones pendientes antes de publicar
- Confirmar el dominio final para actualizar el sitemap y los canonicals.
- Confirmar la indexabilidad final de estas páginas de campaña (¿Solo paid o también orgánico?).
- Confirmar si se integrará GTM u otro sistema en el `head` antes de la subida a Cloudways.
