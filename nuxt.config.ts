// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

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

  compatibilityDate: '2024-07-09',
})
