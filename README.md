# Waves and Shapes — Web

Sitio de presentación del juego, creado con React 19, Vite y Tailwind CSS 4. Incluye español/inglés, visualización de mecánicas, momentos de gameplay y galería ampliable. Es estático; el juego se ejecuta por separado. Anuncia disponibilidad próxima y enlaza al canal oficial de YouTube para futuros gameplays, soundtracks y cinemáticas. No expone enlaces al repositorio privado del juego.

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
- Medios: `public/media`; fuente del juego: `public/fonts/pantha-latin.otf`.
- `hangar.png` y Pantha provienen del proyecto WavesAndShapes; conservan sus derechos y licencias originales.
- `light-it-up-drop.png` (00:39.5) y `ascend-climax.png` (02:06.5) son capturas nuevas a 1280×720 del juego real, tomadas en modo práctica Hardcore. Se obtuvieron con un capturador temporal sin editar los charts ni escribir récords.
- `editor.png` y `simulation-capture.png` son capturas reales de pruebas automatizadas, recuperadas de la caché del juego. El diagrama de mecánicas y el emblema del hero son ilustraciones web.
- La música no se distribuye en este sitio. Light It Up se acredita a Robin Hustin y Tobimorrow.
- No se copian archivos de `assets_private` ni de `video`.

Canal oficial: https://www.youtube.com/@WavesAndShapes
