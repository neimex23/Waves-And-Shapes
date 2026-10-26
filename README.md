# Waves and Shapes — Web

Sitio de presentación del juego, creado con React 19, Vite y Tailwind CSS 4. Incluye español/inglés, capturas reales de las mecánicas actuales, modos Normal/Hardcore/Práctica, canciones y galería ampliable. Es estático; el juego se ejecuta por separado. Anuncia disponibilidad próxima y enlaza al canal oficial de YouTube para futuros gameplays, soundtracks y cinemáticas. No expone enlaces al repositorio privado del juego.

## Desarrollo

Requiere Node.js 24 y npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## GitHub Pages

1. Sube estos archivos a la rama `main` de `neimex23/WavesAndShapes_Web`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` compila y publica `dist` con cada push a `main`; también se puede ejecutar manualmente desde Actions.

Dirección esperada una vez desplegado: https://neimex23.github.io/WavesAndShapes_Web/

Vite usa `base: './'` para que scripts, imágenes y fuentes funcionen bajo el subdirectorio del repositorio o un dominio propio. La navegación usa anclas, por lo que no requiere redirecciones.

Referencias: [GitHub Pages con Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Vite static deployment](https://vite.dev/guide/static-deploy).

## Contenido y medios

- Textos y momentos: `src/App.jsx`; estilos: `src/App.css` e `src/index.css`.
- Canciones: `src/songs.js`; diez portadas aportadas por el autor en `public/media/covers`, más el logo que enlaza al catálogo de NCS. Siete canciones enlazan a sus fichas oficiales de NCS. Protocol, Keep IT y Opal se acreditan a Ky y enlazan a Newgrounds. Opal usa una tarjeta tipográfica hasta disponer de su portada. The Lights Are Low enlaza a su vídeo de YouTube; no se atribuyen estos temas a NCS.
- Medios: `public/media`; fuente del juego: `public/fonts/pantha-latin.otf`.
- `hangar.png` y Pantha provienen del proyecto WavesAndShapes; conservan sus derechos y licencias originales.
- `light-it-up-drop.png` (00:39.5) y `ascend-climax.png` (02:06.5) son capturas nuevas a 1280×720 del juego real, tomadas en modo práctica Hardcore. Se obtuvieron con un capturador temporal sin editar los charts ni escribir récords.
- `editor.png` y `simulation-capture.png` son capturas reales de pruebas automatizadas, recuperadas de la caché del juego. El hero muestra gameplay real y las mecánicas usan capturas del juego.
- La música no se distribuye en este sitio. Light It Up se acredita a Robin Hustin y Tobimorrow.
- No se copian archivos de `assets_private` ni de `video`.

Canal oficial: https://www.youtube.com/@WavesAndShapes

## Actualización visual y contacto para artistas

- La presentación usa marcos inspirados en el HUD, instrumentos cian y acentos ámbar. Incluye rotación direccional, dash con giro/estela, parry, barreras azules, rebobinado y los modos actuales.
- Las capturas adicionales proceden de revisiones locales del juego: Invincible r9 (preview-119.png, 119 s, y preview-090.png, 90 s) y la prueba de dash/parry (06-dash-parry.png). Son imágenes estáticas de ejecución automatizada, no vídeo ni una demostración jugable.
- src/Contact.jsx y src/proposal.js preparan propuestas de artistas a ezequielmedina23@gmail.com con nombre artístico, correo, tema, enlace y mensaje opcional. HTML valida los campos obligatorios, email y URL. Los datos se codifican como parámetros de mailto:; el artista revisa y envía desde su cliente de correo. Se puede copiar el mensaje como alternativa.
- No hay backend, claves ni servicio de envío externo. El sitio no almacena las propuestas y no muestra una confirmación falsa de envío. Requiere un cliente de correo para abrir el borrador; la alternativa de copia permite usar webmail.
- Todos los medios usan import.meta.env.BASE_URL; el formulario y las anclas funcionan bajo el subdirectorio de GitHub Pages.
## Menú principal animado

La galería reemplaza el antiguo hangar por main-menu.gif: captura real de scenes/menu/SimulationScene.tscn, el fondo visible del MainMenu actual, sin botones ni audio. Se grabaron 96 fotogramas a 12 FPS desde Godot y se comprimieron a 400×226, 8 FPS, 64 colores y unos 6 segundos en ida/vuelta (movimiento acelerado para este adelanto). Tamaño aproximado: 1,2 MB. main-menu.jpg es el fotograma estático usado en el hero y como alternativa con movimiento reducido. Ambos archivos se sirven localmente con las rutas base de GitHub Pages; no requieren servicios externos. La captura fuente y sus logs quedan en export/web-menu-preview del repositorio del juego, sin modificar sus escenas.
