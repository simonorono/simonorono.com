export default function (path: string = '') {
  const config = useRuntimeConfig()

  let canonical = config.public.siteUrl

  if (path != '/') {
    canonical = `${canonical}${path}`
  }

  return canonical
}
