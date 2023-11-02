export default function (path: string = '') {
  let canonical = 'https://simonorono.com'

  if (path != '/') {
    canonical = `${canonical}${path}`
  }

  return canonical
}
