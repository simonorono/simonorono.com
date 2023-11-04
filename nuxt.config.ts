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

  runtimeConfig: {
    public: {
      gravatarHash: process.env.NUXT_PUBLIC_GRAVATAR_HASH ?? '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? '',
    },
  },
})
