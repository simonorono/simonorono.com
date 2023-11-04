// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '~/node_modules/@fontsource-variable/inter/index.css',
  ],
  devtools: { enabled: true },
  modules: ['nuxt-simple-sitemap'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
