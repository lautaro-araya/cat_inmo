# PRODUCT — Loteo Pargua Sur · versión monografía

Catálogo web del mismo proyecto, con un tratamiento distinto al de la versión cadastral (v1) y al de la versión web-app industrial (v2). Pensado para que el cliente pueda comparar tres rutas de diseño.

## Registro
**Brand.** Catálogo de venta = pieza de marketing. La impresión que deja la página convierte (o no) al comprador.

## Escena
Un familiar del comprador revisando el proyecto en su laptop de 13 pulgadas, un domingo de mañana con café, antes de pasárselo a quien toma la decisión durante la semana. Lectura contemplativa, no operativa. Por eso: blanco, mucho aire, fotografía al frente.

## Voz (tres palabras concretas)
**Panorámica, relevada, pausada.**

## Carril estético
Monografía de paisaje, tipo libro de arte sobre tierras. Referencias: prospectos de fundaciones de conservación patagónica, libros de fotografía de paisaje territorial, brochures de hospitalidad rural austral. NO catálogo luxury de Vitacura (gold/serif/burdeos), NO portafolio de arquitecto modernista (caja blanca + foto BN + Helvetica).

## Anti-referencias (específicas)
- Brochures inmobiliarios de departamentos urbanos.
- Catálogos rurales con plano dibujado por inmobiliaria en Word.
- Slideshows con flecha al medio y "1 de 12".
- Mapas Google Maps incrustados sin contexto.

## Color (Restrained)
- Blanco frío: `oklch(0.985 0.005 200)` (no `#fff`)
- Tinta slate: `oklch(0.205 0.022 235)`
- Acento único — verde musgo-lago: `oklch(0.42 0.075 165)` (≤8 % de superficie)
- Regla muy suave: `oklch(0.90 0.008 220)`

## Tipografía
**Spectral** (display, serif transicional) + **Hanken Grotesk** (body sans, grotesque humanista). Ambas en Google Fonts, ninguna en la lista de rechazo de la skill.

## Imaginería (eje central de esta versión)
- Hero panorámico full-bleed (foto verificada de Unsplash).
- Galería curada de 6 fotos en grilla asimétrica, no card-grid.
- Mapa ilustrado custom SVG mostrando el corredor Puerto Montt–Pargua con la parcela marcada.
- Plano del loteo SVG colocado sobre el mapa, conectado al punto de la parcela con un trazo de relevamiento.
- Tablas de lotes en blanco generoso, sin cromar.

## Cómo se distingue de v1 y v2

| Eje | v1 cadastral | v2 industrial-app | v3 monografía (esta) |
|---|---|---|---|
| Fondo | papel cálido óxido | gris frío industrial | blanco frío |
| Acento | óxido corten | naranja seguridad | musgo lago |
| Tipo | Bricolage variable | Space Grotesk + DM Sans | Spectral + Hanken Grotesk |
| Aesthetic lane | documento catastral | swiss-brutalist tech | monografía de paisaje |
| Imagen | plano técnico | dashboard con plano | fotografía como protagonista |
| Mapa | no aparece | no aparece | mapa ilustrado central con plano sobrepuesto |
| Stack | HTML estático | React + Vite | HTML estático |

## Stack
HTML + CSS + JS mínimo. Abre directo. Igual que v1 para que el cliente compare fácil.
