import { useRef, useState } from 'react'
import './App.css'
import { songs } from './songs'
import Contact from './Contact.jsx'
import './Refresh.css'

const youtubeChannel = 'https://www.youtube.com/@WavesAndShapes'
const media = (name) => `${import.meta.env.BASE_URL}media/${name}`
function Artwork({ name, ...props }) {
  if (name === 'main-menu.gif') return <picture><source media="(prefers-reduced-motion: reduce)" srcSet={media('main-menu.jpg')} /><img src={media(name)} {...props} /></picture>
  return <img src={media(name)} {...props} />
}
const copy = {
  es: {
    nav: ['El juego', 'Momentos', 'Canciones', 'Editor', 'Artistas'], source: 'Ver en YouTube', status: 'DISPONIBLE PRÓXIMAMENTE · EN DESARROLLO',
    title: <>EL RITMO.<br />EL CAOS.<br /><span>TU INSTINTO.</span></>, intro: 'Pilota entre patrones que siguen la música. Gira, haz dash y devuelve el peligro con tu escudo. Cada canción es un nuevo desafío.',
    explore: 'Explorar el juego', scroll: 'DESLIZA PARA EXPLORAR', genre: 'RHYTHM BULLET HELL',
    playTag: '01 / SOBREVIVE A LA MÚSICA', playTitle: <>Cada beat.<br />Una decisión.</>, playIntro: 'Una nave que gira contigo. Dash con giro y estela. Parries que devuelven los ataques cargados. Lee el patrón, elige tu ruta y sigue el ritmo.',
    moves: [['Esquiva', 'Muévete en cualquier dirección: la nave sigue tu rumbo. Ante las barreras azules, detente; moverte durante el contacto te hace daño.'], ['Haz dash', 'Cruza el peligro con un impulso, un giro de la nave y una breve estela. Aprovecha la ventana de invulnerabilidad para abrirte paso.'], ['Domina el parry', 'Activa el escudo en el momento preciso para devolver los ataques cargados.']], illustration: 'CAPTURAS DEL JUEGO',
    momentsTag: '02 / EN EL CORAZÓN DEL CAOS', momentsTitle: 'Un instante. Todo en juego.', momentsIntro: 'Enjambres, líneas y patrones que transforman la pantalla. La nave y el HUD actuales, en capturas reales del juego en desarrollo.', momentCaptions: ['Light It Up · Entre enjambres y líneas', 'Invincible · Espacio para leer el peligro'], watchMoments: 'Ver momentos del juego', editorTag: '04 / CONSTRUYE EL SIGUIENTE BEAT', editorTitle: <>Tu música.<br /><span>Tus reglas.</span></>, editorIntro: 'Diseña tus propios niveles con el editor integrado. Dale forma a cada ataque, prueba una sección y vuelve a ajustar hasta encontrar el ritmo.', editorItems: ['Seis tipos de ataque y rutas de movimiento', 'Herramientas de ritmo, patrones y edición en grupo', 'Dificultades independientes y pruebas desde cualquier punto'], editorLink: 'Ver avances en YouTube', enlarge: 'Ampliar captura del editor', screenshot: 'CAPTURA DEL EDITOR',
    songsTag: '03 / LA MÚSICA TOMA FORMA', songsTitle: 'El sonido detrás del caos.', songsIntro: 'Explora las canciones de Waves and Shapes y escucha sus lanzamientos originales.', listenOn: 'Escuchar en', ncsExplore: 'Descubre más música en NCS', ncsIntro: 'Explora el catálogo de NoCopyrightSounds.', coverAlt: 'Portada de', coverEnlarge: 'Ampliar portada de',
    galleryTag: 'DENTRO DEL UNIVERSO', galleryTitle: 'Una señal desde el otro lado.', captureLabel: 'Simulation Core · Calibración del sistema', artLabel: 'Menú principal · Cámara de simulación',
    finalTag: 'HECHO CON GODOT. CREADO POR NEIMEX23.', finalTitle: <>Disponible<br /><span>próximamente.</span></>, finalIntro: 'El próximo beat está en camino. En el canal oficial de Waves and Shapes podrás ver gameplays, soundtracks y cinemáticas. Sigue el canal para acompañar lo que viene.', finalCta: 'Visitar el canal de YouTube', footer: 'Un proyecto de Neimex23', inspired: 'Inspirado en Just Shapes & Beats, de Berzerk Studio.', close: 'Cerrar imagen', menu: 'Abrir navegación',
  },
  en: {
    nav: ['The game', 'Moments', 'Songs', 'Editor', 'Artists'], source: 'Watch on YouTube', status: 'COMING SOON · IN DEVELOPMENT',
    title: <>THE RHYTHM.<br />THE CHAOS.<br /><span>YOUR INSTINCT.</span></>, intro: 'Pilot through patterns shaped by music. Turn, dash, and deflect danger with your shield. Every song is a new challenge.', explore: 'Explore the game', scroll: 'SCROLL TO EXPLORE', genre: 'RHYTHM BULLET HELL',
    playTag: '01 / SURVIVE THE MUSIC', playTitle: <>Every beat.<br />A decision.</>, playIntro: 'A ship that turns with you. A rolling dash with an afterimage trail. Parries that deflect charged attacks. Read the pattern, choose your path, and follow the rhythm.',
    moves: [['Dodge', 'Move in any direction as your ship follows your heading. Stay still against blue barriers; moving during contact causes damage.'], ['Dash', 'Burst through danger with a barrel roll and a short afterimage trail. Use your invulnerability window to find a way through.'], ['Master the parry', 'Time your shield just right to deflect charged attacks.']], illustration: 'IN-GAME CAPTURES',
    momentsTag: '02 / AT THE HEART OF THE CHAOS', momentsTitle: 'One instant. Everything at stake.', momentsIntro: 'Swarms, lasers, and patterns that transform the screen. The current ship and HUD, captured in the game in development.', momentCaptions: ['Light It Up · Between swarms and lasers', 'Invincible · Room to read the danger'], watchMoments: 'See gameplay moments', editorTag: '04 / BUILD THE NEXT BEAT', editorTitle: <>Your music.<br /><span>Your rules.</span></>, editorIntro: 'Create your own levels with the built-in editor. Shape every attack, test a section, and refine it until you find the rhythm.', editorItems: ['Six attack types and movement paths', 'Rhythm tools, patterns, and group editing', 'Independent difficulties and tests from any point'], editorLink: 'Follow development on YouTube', enlarge: 'Enlarge editor screenshot', screenshot: 'EDITOR SCREENSHOT',
    songsTag: '03 / MUSIC TAKES SHAPE', songsTitle: 'The sound behind the chaos.', songsIntro: 'Explore the songs of Waves and Shapes and listen to their original releases.', listenOn: 'Listen on', ncsExplore: 'Discover more music on NCS', ncsIntro: 'Explore the NoCopyrightSounds catalogue.', coverAlt: 'Cover of', coverEnlarge: 'Enlarge cover of',
    galleryTag: 'INSIDE THE UNIVERSE', galleryTitle: 'A signal from the other side.', captureLabel: 'Simulation Core · System calibration', artLabel: 'Main menu · Simulation chamber',
    finalTag: 'MADE WITH GODOT. CREATED BY NEIMEX23.', finalTitle: <>Coming<br /><span>soon.</span></>, finalIntro: 'The next beat is on its way. The official Waves and Shapes channel will feature gameplay, soundtracks, and cutscenes. Follow the channel for what comes next.', finalCta: 'Visit the YouTube channel', footer: 'A project by Neimex23', inspired: 'Inspired by Just Shapes & Beats, by Berzerk Studio.', close: 'Close image', menu: 'Open navigation',
  },
}

function Arrow() { return <span aria-hidden="true">↗</span> }
function Mark() { return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 4 37 34H3L20 4Z" stroke="currentColor" strokeWidth="2" /><path d="m20 15 10 17H10l10-17Z" fill="currentColor" /><circle cx="20" cy="25" r="3" fill="#071016" /></svg> }

function App() {
  const [lang, setLang] = useState('es')
  const [activeMove, setActiveMove] = useState(0)
  const [menu, setMenu] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const dialog = useRef(null)
  const t = copy[lang]
  function openImage(src, title) { setSelectedImage({ src, title }); dialog.current.showModal() }
  function switchLanguage() {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    document.documentElement.lang = next
    document.title = next === 'es' ? 'Waves and Shapes — El ritmo. El caos. Tu instinto.' : 'Waves and Shapes — The rhythm. The chaos. Your instinct.'
  }
  return <>
    <a className="skip-link" href="#main">{lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
    <header className="header"><a href="#" className="brand" aria-label="Waves and Shapes"><Mark /><span>WAVES<span className="brand-and"> & </span>SHAPES</span></a>
      <nav className={menu ? 'nav is-open' : 'nav'} aria-label={lang === 'es' ? 'Principal' : 'Main'}>{t.nav.map((label, i) => <a key={i} href={`#${['game', 'moments', 'songs', 'editor', 'contact'][i]}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="language" onClick={switchLanguage} aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}>{lang.toUpperCase()} <span aria-hidden="true">⌄</span></button><a className="header-channel" href={youtubeChannel}>YouTube <Arrow /></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={t.menu}>{menu ? '✕' : '☰'}</button></div></header>
    <main id="main"><section className="hero"><img className="hero-bg" src={media('main-menu.jpg')} alt="" fetchPriority="high" /><div className="hero-shade" />
      <div className="hero-content shell"><div className="eyebrow"><span className="status-dot" />{t.status}</div><h1>{t.title}</h1><p>{t.intro}</p><div className="hero-buttons"><a className="button button-primary" href="#game">{t.explore}<Arrow /></a><a className="text-link" href={youtubeChannel}>{t.source}<Arrow /></a></div></div>
      <div className="hero-gameplay"><div className="preview-topline"><span className="status-dot" /><span>WAVES & SHAPES / GAMEPLAY</span><span>01 — IN GAME</span></div><a href="#moments" aria-label={t.watchMoments}><img src={media('light-it-up-drop.png')} alt={t.momentCaptions[0]} fetchPriority="high" /><span className="preview-play" aria-hidden="true">↘</span></a><div className="preview-bottomline"><span>LIGHT IT UP</span><span>RHYTHM / BULLET HELL</span></div></div>
      <div className="hero-footer shell"><a href="#game"><span aria-hidden="true">↓</span> {t.scroll}</a><span>{t.genre} <i /> GODOT ENGINE</span></div></section>
      <div className="signal-strip" aria-hidden="true"><span>DODGE</span><span className="strip-symbol">◇</span><span>DASH</span><span className="strip-symbol">△</span><span>PARRY</span><span className="strip-symbol">⊕</span><span>REPEAT</span><span className="strip-wave">▂ ▄ ▆ ▃ █ ▅ ▂ ▅ ▇ ▃ ▂ ▆ ▄ ▂</span></div>
      <section id="game" className="section shell gameplay"><div className="game-copy"><p className="eyebrow">{t.playTag}</p><h2>{t.playTitle}</h2><p className="section-intro">{t.playIntro}</p><div className="mechanics">{t.moves.map(([title, body], i) => <div className={`mechanic ${activeMove === i ? 'selected' : ''}`} key={i}><button onClick={() => setActiveMove(i)} aria-expanded={activeMove === i} aria-controls={`mechanic-${i}`}><span className="mono">0{i + 1}</span>{title}<span aria-hidden="true">{activeMove === i ? '−' : '+'}</span></button><p id={`mechanic-${i}`} hidden={activeMove !== i}>{body}</p></div>)}</div></div><div className="arena-wrap"><button className="image-button mechanics-capture" onClick={() => openImage(['invincible-gates.png', 'dash-parry.png', 'invincible-gameplay.png'][activeMove], t.moves[activeMove][0])} aria-label={t.moves[activeMove][0] + ' — ' + (lang === 'es' ? 'ampliar captura' : 'enlarge screenshot')}><img src={media(['invincible-gates.png', 'dash-parry.png', 'invincible-gameplay.png'][activeMove])} alt={t.moves[activeMove][0]} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><div className="image-caption"><span className="status-dot" />{t.illustration}<span>W/S_001</span></div></div></section>
      <section className="mode-section shell" aria-label={lang === 'es' ? 'Modos de juego' : 'Game modes'}><div className="mode-heading"><p className="eyebrow">{lang === 'es' ? 'ENCUENTRA TU RITMO' : 'FIND YOUR RHYTHM'}</p><h2>{lang === 'es' ? 'Una canción. Tu desafío.' : 'One song. Your challenge.'}</h2></div><div className="mode-grid">
        {(lang === 'es' ? [['△', 'Normal', 'Aprende cada sección con checkpoints. Si caes, el tiempo rebobina para que vuelvas a intentarlo.'], ['▽', 'Hardcore', 'Sin checkpoints en la partida normal. Domina el tema completo y busca una ejecución sin daño.'], ['↺', 'Práctica', 'Empieza desde un punto de la canción y ajusta las ayudas para trabajar ese patrón que se te resiste.']]: [['△', 'Normal', 'Learn each section with checkpoints. If you fall, time rewinds so you can try again.'], ['▽', 'Hardcore', 'No checkpoints in a regular run. Master the whole track and aim for a no-hit performance.'], ['↺', 'Practice', 'Start from a point in the song and adjust assists to work on that pattern you want to master.']]).map(([icon, title, body]) => <article key={title}><span className="mode-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div></section>
      <section id="moments" className="moments-section section"><div className="shell"><p className="eyebrow">{t.momentsTag}</p><h2>{t.momentsTitle}</h2><p className="section-intro">{t.momentsIntro}</p><div className="moments-grid">{[['light-it-up-drop.png', '00:39.5'], ['invincible-gameplay.png', '01:59.0']].map(([src, time], i) => <figure key={src}><button className="image-button" onClick={() => openImage(src, t.momentCaptions[i])} aria-label={t.momentCaptions[i] + (lang === 'es' ? ' — ampliar' : ' — enlarge')}><img src={media(src)} alt={t.momentCaptions[i]} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><figcaption><span>{t.momentCaptions[i]}</span><span className="mono">{time}</span></figcaption></figure>)}</div><a className="text-link moments-channel" href={youtubeChannel}>{t.source}<Arrow /></a></div></section>
      <section id="songs" className="section songs-section shell" aria-labelledby="songs-title">
        <p className="eyebrow">{t.songsTag}</p><h2 id="songs-title">{t.songsTitle}</h2><p className="section-intro">{t.songsIntro}</p>
        <div className="songs-grid">{songs.map((song, i) => <article className="song-card" key={song.title}>
          {song.cover ? <button className="image-button song-cover" onClick={() => openImage('covers/' + song.cover, song.title)} aria-label={t.coverEnlarge + ' ' + song.title}><img src={media('covers/' + song.cover)} alt={t.coverAlt + ' ' + song.title} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button> : <div className="song-placeholder" aria-hidden="true"><span>OPAL</span><span>Ky</span></div>}
          <div className="song-heading"><span className="mono">{String(i + 1).padStart(2, '0')}</span><h3>{song.title}</h3></div>
          {song.artist && <p className="song-artist">{song.artist}</p>}
          {song.url && <a className="text-link song-link" href={song.url} target="_blank" rel="noopener noreferrer" aria-label={song.title + ' — ' + t.listenOn + ' ' + (song.platform || 'NCS')}>{t.listenOn} {song.platform || 'NCS'}<Arrow /></a>}
        </article>)}</div>
        <a className="ncs-banner" href="https://ncs.io/" target="_blank" rel="noopener noreferrer"><img src={media('covers/ncs.jpg')} alt="NCS — NoCopyrightSounds" loading="lazy" /><div><h3>{t.ncsExplore}</h3><p>{t.ncsIntro}</p></div><Arrow /></a>
      </section>
      <section id="editor" className="section editor-section shell"><div className="editor-image"><button className="image-button" onClick={() => openImage('editor.png', t.screenshot)} aria-label={t.enlarge}><img src={media('editor.png')} alt={t.screenshot} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><div className="image-caption">{t.screenshot}<span>EDITOR / GODOT</span></div></div><div className="editor-copy"><p className="eyebrow">{t.editorTag}</p><h2>{t.editorTitle}</h2><p className="section-intro">{t.editorIntro}</p><ul>{t.editorItems.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul><a className="text-link" href={youtubeChannel}>{t.editorLink}<Arrow /></a></div></section>
      <section className="gallery-section shell"><p className="eyebrow">{t.galleryTag}</p><h2>{t.galleryTitle}</h2><div className="gallery-grid">{[['simulation-capture.png', t.captureLabel], ['main-menu.gif', t.artLabel]].map(([src, title]) => <figure key={src}><button className="image-button" onClick={() => openImage(src, title)} aria-label={`${title} — ${lang === 'es' ? 'ampliar' : 'enlarge'}`}><Artwork name={src} alt={title} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><figcaption>{title}<span>↗</span></figcaption></figure>)}</div></section>
      <Contact lang={lang} />
      <section className="final-section"><div className="final-ring" aria-hidden="true" /><div className="shell final-content"><p className="eyebrow">{t.finalTag}</p><h2>{t.finalTitle}</h2><p>{t.finalIntro}</p><div className="final-buttons"><a className="button button-primary" href={youtubeChannel}>{t.finalCta}<Arrow /></a><a className="text-link" href="#moments">{t.watchMoments}<Arrow /></a></div></div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#"><Mark /><span>WAVES & SHAPES</span></a><div><p>{t.footer}</p><p>{t.inspired}</p></div><a href={youtubeChannel}>YouTube <Arrow /></a></footer>
    <dialog ref={dialog} className="lightbox" aria-label={selectedImage?.title} onClick={e => { if (e.target === dialog.current) dialog.current.close() }}><div className="lightbox-toolbar"><span>{selectedImage?.title}</span><button onClick={() => dialog.current.close()} aria-label={t.close}>{t.close} <span aria-hidden="true">✕</span></button></div>{selectedImage && <Artwork name={selectedImage.src} alt={selectedImage.title} />}</dialog>
  </>
}

export default App
