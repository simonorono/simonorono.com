export default function (prefix: string = '') {
  let title = 'Simón Oroño — simonorono.com'

  if (prefix.length > 0) {
    title = `${prefix} — ${title}`
  }

  return title
}
