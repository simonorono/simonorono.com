<script setup lang="ts">
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: canonical(route.path) },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      color: '#5bbad5',
      href: '/safari-pinned-tab.svg',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  title: title(),
})
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <header class="shrink lg:min-h-screen">
      <Header />
    </header>

    <main class="w-full grow lg:min-h-screen">
      <div class="px-4 py-8 sm:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
