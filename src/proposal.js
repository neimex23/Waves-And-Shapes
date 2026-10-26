export const contactEmail = 'ezequielmedina23@gmail.com'

export function prepareProposal(values, lang) {
  const es = lang === 'es'
  const subject = `Waves and Shapes — ${es ? 'Propuesta musical' : 'Music submission'}: ${values.track.trim()}`
  const body = [
    `${es ? 'Artista' : 'Artist'}: ${values.artist.trim()}`,
    `Email: ${values.email.trim()}`,
    `${es ? 'Tema' : 'Track'}: ${values.track.trim()}`,
    `${es ? 'Escuchar' : 'Listen'}: ${values.link.trim()}`,
    '',
    values.message.trim(),
  ].join('\n')
  return { body, subject, url: `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` }
}
