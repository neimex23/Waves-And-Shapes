import { useState } from 'react'
import { contactEmail, prepareProposal } from './proposal.js'

const text = {
  es: {
    tag: '05 / PARA ARTISTAS', title: 'Tu música podría ser el próximo nivel.',
    intro: '¿Eres artista y te gustaría que tu música forme parte de Waves and Shapes? Preséntate, comparte un tema y cuéntame cómo te gustaría colaborar.',
    artist: 'Nombre artístico', email: 'Tu correo', track: 'Nombre del tema', link: 'Enlace para escuchar', message: 'Cuéntame sobre tu música',
    placeholder: 'Tu proyecto, el estilo del tema y cualquier detalle que quieras compartir…',
    note: 'El formulario abre tu aplicación de correo con la propuesta preparada. Revisa el mensaje y envíalo desde allí. No se envía ni se guarda en esta web.',
    submit: 'Preparar correo', copy: 'Copiar propuesta', copied: 'Propuesta copiada. Puedes pegarla en un correo.', copyFailed: 'No se pudo copiar. Selecciona el texto de la propuesta para copiarlo.',
    prepared: 'Tu propuesta está preparada. Si no se abrió tu correo, copia el texto y envíalo a la dirección de contacto.',
    direct: 'También puedes escribirme directamente', preview: 'Tu propuesta', optional: 'opcional',
  },
  en: {
    tag: '05 / FOR ARTISTS', title: 'Your music could be the next level.',
    intro: 'Are you an artist who would like to bring your music to Waves and Shapes? Introduce yourself, share a track, and tell me how you would like to collaborate.',
    artist: 'Artist name', email: 'Your email', track: 'Track title', link: 'Listening link', message: 'Tell me about your music',
    placeholder: 'Your project, the style of your track, and anything else you would like to share…',
    note: 'This form opens your email app with a prepared message. Review it and send it from there. Nothing is sent or stored by this website.',
    submit: 'Prepare email', copy: 'Copy submission', copied: 'Submission copied. You can paste it into an email.', copyFailed: 'Could not copy. Select the submission text to copy it.',
    prepared: 'Your submission is ready. If your email app did not open, copy the text and send it to the contact address.',
    direct: 'You can also email me directly', preview: 'Your submission', optional: 'optional',
  },
}

export default function Contact({ lang }) {
  const t = text[lang]
  const [values, setValues] = useState({ artist: '', email: '', track: '', link: '', message: '' })
  const [prepared, setPrepared] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const proposal = prepareProposal(values, lang)
  function change(event) {
    setValues({ ...values, [event.target.name]: event.target.value })
    setPrepared(false)
    setCopyStatus('')
  }
  function submit(event) {
    event.preventDefault()
    setPrepared(true)
    window.location.href = proposal.url
  }
  async function copyProposal() {
    try {
      await navigator.clipboard.writeText(`${proposal.subject}\n\n${proposal.body}`)
      setCopyStatus('copied')
    } catch { setCopyStatus('copyFailed') }
  }
  return <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="shell contact-grid">
    <div className="contact-copy"><p className="eyebrow">{t.tag}</p><h2 id="contact-title">{t.title}</h2><p className="section-intro">{t.intro}</p><div className="contact-address"><span>{t.direct}</span><a href={`mailto:${contactEmail}`}>{contactEmail} ↗</a></div></div>
    <form className="artist-form" onSubmit={submit}>
      <div className="form-grid">{[['artist', 'text', t.artist, 'nickname'], ['email', 'email', t.email, 'email'], ['track', 'text', t.track, 'off'], ['link', 'url', t.link, 'url']].map(([name, type, label, autoComplete]) => <label key={name} htmlFor={`contact-${name}`}>{label}<input id={`contact-${name}`} name={name} type={type} autoComplete={autoComplete} required maxLength={name === 'link' ? 500 : 160} value={values[name]} onChange={change} placeholder={name === 'link' ? 'https://…' : undefined} /></label>)}</div>
      <label htmlFor="contact-message">{t.message} <span>({t.optional})</span><textarea id="contact-message" name="message" rows="4" maxLength="1200" value={values.message} onChange={change} placeholder={t.placeholder} /></label>
      <p className="form-note" id="contact-note">{t.note}</p><button className="button button-primary" type="submit" aria-describedby="contact-note">{t.submit}<span aria-hidden="true">↗</span></button>
      {prepared && <div className="proposal-preview"><p role="status">{t.prepared}</p><label htmlFor="proposal-text">{t.preview}</label><textarea id="proposal-text" rows="7" readOnly value={`${proposal.subject}\n\n${proposal.body}`} /><button type="button" className="text-link" onClick={copyProposal}>{t.copy} <span aria-hidden="true">↗</span></button><p role="status">{copyStatus && t[copyStatus]}</p></div>}
    </form>
  </div></section>
}
