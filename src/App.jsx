import { useRef, useState } from 'react'
import './App.css'

const youtubeChannel = 'https://www.youtube.com/@WavesAndShapes'
const media = (name) => `${import.meta.env.BASE_URL}media/${name}`
const copy = {
  es: {
    nav: ['El juego', 'Momentos', 'Editor'], source: 'Ver en YouTube', status: 'DISPONIBLE PRÓXIMAMENTE · EN DESARROLLO',
    title: <>EL RITMO.<br />EL CAOS.<br /><span>TU INSTINTO.</span></>, intro: 'Entra en un universo donde la música toma forma. Esquiva, acelera y encuentra tu espacio entre cada beat.',
    explore: 'Explorar el juego', scroll: 'DESLIZA PARA EXPLORAR', genre: 'RHYTHM BULLET HELL',
    playTag: '01 / SOBREVIVE A LA MÚSICA', playTitle: <>Cada beat.<br />Una decisión.</>, playIntro: 'Formas simples. Patrones intensos. Tú en el centro de todo. Aprende a leer el peligro y convierte el movimiento en tu mejor respuesta.',
    moves: [['Esquiva', 'Encuentra el hueco entre proyectiles, líneas y enjambres. La calma también es parte del ritmo.'], ['Haz dash', 'Cruza el peligro con un impulso y aprovecha su ventana de invulnerabilidad.'], ['Domina el parry', 'Activa el escudo en el momento preciso para devolver los ataques cargados.']], illustration: 'VISUALIZACIÓN DE MECÁNICAS',
    momentsTag: '02 / EN EL CORAZÓN DEL CAOS', momentsTitle: 'Un instante. Todo en juego.', momentsIntro: 'Enjambres, líneas y patrones que transforman la pantalla. Una mirada a dos momentos del juego en desarrollo.', momentCaptions: ['Light It Up · Entre enjambres y líneas', 'Ascend to Ruins · La intensidad del ascenso'], watchMoments: 'Ver momentos del juego', editorTag: '03 / CONSTRUYE EL SIGUIENTE BEAT', editorTitle: <>Tu música.<br /><span>Tus reglas.</span></>, editorIntro: 'Diseña tus propios niveles con el editor integrado. Dale forma a cada ataque, prueba una sección y vuelve a ajustar hasta encontrar el ritmo.', editorItems: ['Seis tipos de ataque y rutas de movimiento', 'Herramientas de ritmo, patrones y edición en grupo', 'Dificultades independientes y pruebas desde cualquier punto'], editorLink: 'Ver avances en YouTube', enlarge: 'Ampliar captura del editor', screenshot: 'CAPTURA DEL EDITOR',
    galleryTag: 'DENTRO DEL UNIVERSO', galleryTitle: 'Una señal desde el otro lado.', captureLabel: 'Simulation Core · Calibración del sistema', artLabel: 'Hangar · Arte del menú',
    finalTag: 'HECHO CON GODOT. CREADO POR NEIMEX23.', finalTitle: <>Disponible<br /><span>próximamente.</span></>, finalIntro: 'El próximo beat está en camino. En el canal oficial de Waves and Shapes podrás ver gameplays, soundtracks y cinemáticas. Sigue el canal para acompañar lo que viene.', finalCta: 'Visitar el canal de YouTube', footer: 'Un proyecto de Neimex23', inspired: 'Inspirado en Just Shapes & Beats, de Berzerk Studio.', close: 'Cerrar imagen', menu: 'Abrir navegación',
  },
  en: {
    nav: ['The game', 'Moments', 'Editor'], source: 'Watch on YouTube', status: 'COMING SOON · IN DEVELOPMENT',
    title: <>THE RHYTHM.<br />THE CHAOS.<br /><span>YOUR INSTINCT.</span></>, intro: 'Enter a universe where music takes shape. Dodge, dash, and find your space between every beat.', explore: 'Explore the game', scroll: 'SCROLL TO EXPLORE', genre: 'RHYTHM BULLET HELL',
    playTag: '01 / SURVIVE THE MUSIC', playTitle: <>Every beat.<br />A decision.</>, playIntro: 'Simple shapes. Intense patterns. You at the center of it all. Learn to read the danger and make movement your best response.',
    moves: [['Dodge', 'Find a path through projectiles, lasers, and swarms. Staying calm is part of the rhythm.'], ['Dash', 'Burst through danger and make the most of your invulnerability window.'], ['Master the parry', 'Time your shield just right to deflect charged attacks.']], illustration: 'MECHANICS VISUALIZATION',
    momentsTag: '02 / AT THE HEART OF THE CHAOS', momentsTitle: 'One instant. Everything at stake.', momentsIntro: 'Swarms, lasers, and patterns that transform the screen. A glimpse at two moments from the game in development.', momentCaptions: ['Light It Up · Between swarms and lasers', 'Ascend to Ruins · The intensity of the ascent'], watchMoments: 'See gameplay moments', editorTag: '03 / BUILD THE NEXT BEAT', editorTitle: <>Your music.<br /><span>Your rules.</span></>, editorIntro: 'Create your own levels with the built-in editor. Shape every attack, test a section, and refine it until you find the rhythm.', editorItems: ['Six attack types and movement paths', 'Rhythm tools, patterns, and group editing', 'Independent difficulties and tests from any point'], editorLink: 'Follow development on YouTube', enlarge: 'Enlarge editor screenshot', screenshot: 'EDITOR SCREENSHOT',
    galleryTag: 'INSIDE THE UNIVERSE', galleryTitle: 'A signal from the other side.', captureLabel: 'Simulation Core · System calibration', artLabel: 'Hangar · Menu artwork',
    finalTag: 'MADE WITH GODOT. CREATED BY NEIMEX23.', finalTitle: <>Coming<br /><span>soon.</span></>, finalIntro: 'The next beat is on its way. The official Waves and Shapes channel will feature gameplay, soundtracks, and cutscenes. Follow the channel for what comes next.', finalCta: 'Visit the YouTube channel', footer: 'A project by Neimex23', inspired: 'Inspired by Just Shapes & Beats, by Berzerk Studio.', close: 'Close image', menu: 'Open navigation',
  },
}

function Arrow() { return <span aria-hidden="true">↗</span> }
function Mark() { return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 4 37 34H3L20 4Z" stroke="currentColor" strokeWidth="2" /><path d="m20 15 10 17H10l10-17Z" fill="currentColor" /><circle cx="20" cy="25" r="3" fill="#071016" /></svg> }

function Arena({ active }) {
  return <div className={`arena arena-${active}`} aria-hidden="true"><div className="arena-grid" /><svg viewBox="0 0 600 430" className="arena-svg">
    <defs><radialGradient id="core"><stop stopColor="#67f6ed" stopOpacity=".2" /><stop offset="1" stopColor="#67f6ed" stopOpacity="0" /></radialGradient></defs><circle cx="300" cy="215" r="190" fill="url(#core)" />
    <g className="orbit"><circle cx="300" cy="215" r="158" /><circle cx="300" cy="215" r="174" strokeDasharray="2 13" /><path d="M60 215h65m350 0h65M300 8v42m0 330v42" /></g>
    <g className="hazards">{Array.from({ length: 18 }, (_, i) => { const a = i * Math.PI / 9; return <circle key={i} cx={300 + Math.cos(a) * (i % 2 ? 130 : 195)} cy={215 + Math.sin(a) * (i % 2 ? 130 : 170)} r={i % 3 ? 5 : 9} /> })}</g>
    <path className="dash-trail" d="m200 280 70-45 40-20" /><g className="ship"><path d="m306 186 18 41-18-9-18 9 18-41Z" /><circle className="shield" cx="306" cy="210" r="39" /></g><path className="aim-lines" d="M75 85 215 165M490 320l-120-67M488 84l-90 63" />
    </svg><div className="arena-corner top-left">W/S — SIMULATION</div><div className="arena-corner bottom-right">{['DODGE', 'DASH', 'PARRY'][active]} / ACTIVE</div></div>
}

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
      <nav className={menu ? 'nav is-open' : 'nav'} aria-label={lang === 'es' ? 'Principal' : 'Main'}>{t.nav.map((label, i) => <a key={i} href={`#${['game', 'moments', 'editor'][i]}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="language" onClick={switchLanguage} aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}>{lang.toUpperCase()} <span aria-hidden="true">⌄</span></button><a className="header-channel" href={youtubeChannel}>YouTube <Arrow /></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={t.menu}>{menu ? '✕' : '☰'}</button></div></header>
    <main id="main"><section className="hero"><img className="hero-bg" src={media('hangar.png')} alt="" fetchPriority="high" /><div className="hero-shade" />
      <div className="hero-content shell"><div className="eyebrow"><span className="status-dot" />{t.status}</div><h1>{t.title}</h1><p>{t.intro}</p><div className="hero-buttons"><a className="button button-primary" href="#game">{t.explore}<Arrow /></a><a className="text-link" href={youtubeChannel}>{t.source}<Arrow /></a></div></div>
      <div className="hero-portal" aria-hidden="true"><div className="portal-ring" /><div className="portal-ring ring-inner" /><div className="portal-orbit" /><svg className="hero-triangle" viewBox="0 0 300 300"><path d="m150 32 128 224H22L150 32Z" fill="#071a22" fillOpacity=".65" stroke="#56e9f0" strokeWidth="2"/><path d="m150 71 94 164H56l94-164Z" fill="none" stroke="#56e9f0" strokeOpacity=".3"/><circle cx="150" cy="180" r="24" fill="#71fff3" fillOpacity=".15" stroke="#71fff3"/><circle cx="150" cy="180" r="7" fill="#a7fff6"/></svg><span className="portal-coordinate">SERPENT / SIGNAL DETECTED</span><span className="portal-cross cross-one">+</span><span className="portal-cross cross-two">+</span></div>
      <div className="hero-footer shell"><a href="#game"><span aria-hidden="true">↓</span> {t.scroll}</a><span>{t.genre} <i /> GODOT ENGINE</span></div></section>
      <div className="signal-strip" aria-hidden="true"><span>DODGE</span><span className="strip-symbol">◇</span><span>DASH</span><span className="strip-symbol">△</span><span>PARRY</span><span className="strip-symbol">⊕</span><span>REPEAT</span><span className="strip-wave">▂ ▄ ▆ ▃ █ ▅ ▂ ▅ ▇ ▃ ▂ ▆ ▄ ▂</span></div>
      <section id="game" className="section shell gameplay"><div className="game-copy"><p className="eyebrow">{t.playTag}</p><h2>{t.playTitle}</h2><p className="section-intro">{t.playIntro}</p><div className="mechanics">{t.moves.map(([title, body], i) => <div className={`mechanic ${activeMove === i ? 'selected' : ''}`} key={i}><button onClick={() => setActiveMove(i)} aria-expanded={activeMove === i} aria-controls={`mechanic-${i}`}><span className="mono">0{i + 1}</span>{title}<span aria-hidden="true">{activeMove === i ? '−' : '+'}</span></button><p id={`mechanic-${i}`} hidden={activeMove !== i}>{body}</p></div>)}</div></div><div className="arena-wrap"><Arena active={activeMove} /><div className="image-caption"><span className="status-dot" />{t.illustration}<span>W/S_001</span></div></div></section>
      <section id="moments" className="moments-section section"><div className="shell"><p className="eyebrow">{t.momentsTag}</p><h2>{t.momentsTitle}</h2><p className="section-intro">{t.momentsIntro}</p><div className="moments-grid">{[['light-it-up-drop.png', '00:39.5'], ['ascend-climax.png', '02:06.5']].map(([src, time], i) => <figure key={src}><button className="image-button" onClick={() => openImage(src, t.momentCaptions[i])} aria-label={t.momentCaptions[i] + (lang === 'es' ? ' — ampliar' : ' — enlarge')}><img src={media(src)} alt={t.momentCaptions[i]} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><figcaption><span>{t.momentCaptions[i]}</span><span className="mono">{time}</span></figcaption></figure>)}</div><a className="text-link moments-channel" href={youtubeChannel}>{t.source}<Arrow /></a></div></section>
      <section id="editor" className="section editor-section shell"><div className="editor-image"><button className="image-button" onClick={() => openImage('editor.png', t.screenshot)} aria-label={t.enlarge}><img src={media('editor.png')} alt={t.screenshot} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><div className="image-caption">{t.screenshot}<span>EDITOR / GODOT</span></div></div><div className="editor-copy"><p className="eyebrow">{t.editorTag}</p><h2>{t.editorTitle}</h2><p className="section-intro">{t.editorIntro}</p><ul>{t.editorItems.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul><a className="text-link" href={youtubeChannel}>{t.editorLink}<Arrow /></a></div></section>
      <section className="gallery-section shell"><p className="eyebrow">{t.galleryTag}</p><h2>{t.galleryTitle}</h2><div className="gallery-grid">{[['simulation-capture.png', t.captureLabel], ['hangar.png', t.artLabel]].map(([src, title]) => <figure key={src}><button className="image-button" onClick={() => openImage(src, title)} aria-label={`${title} — ${lang === 'es' ? 'ampliar' : 'enlarge'}`}><img src={media(src)} alt={title} loading="lazy" /><span className="expand-icon" aria-hidden="true">↗</span></button><figcaption>{title}<span>↗</span></figcaption></figure>)}</div></section>
      <section className="final-section"><div className="final-ring" aria-hidden="true" /><div className="shell final-content"><p className="eyebrow">{t.finalTag}</p><h2>{t.finalTitle}</h2><p>{t.finalIntro}</p><div className="final-buttons"><a className="button button-primary" href={youtubeChannel}>{t.finalCta}<Arrow /></a><a className="text-link" href="#moments">{t.watchMoments}<Arrow /></a></div></div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#"><Mark /><span>WAVES & SHAPES</span></a><div><p>{t.footer}</p><p>{t.inspired}</p></div><a href={youtubeChannel}>YouTube <Arrow /></a></footer>
    <dialog ref={dialog} className="lightbox" aria-label={selectedImage?.title} onClick={e => { if (e.target === dialog.current) dialog.current.close() }}><div className="lightbox-toolbar"><span>{selectedImage?.title}</span><button onClick={() => dialog.current.close()} aria-label={t.close}>{t.close} <span aria-hidden="true">✕</span></button></div>{selectedImage && <img src={media(selectedImage.src)} alt={selectedImage.title} />}</dialog>
  </>
}

export default App
