<script setup lang="ts">
const route = useRoute()
useHead({
  title: title(),
  link: [{ rel: 'canonical', href: canonical(route.path) }],
})
</script>

<template>
  <header>
    <Header />
  </header>

  <main class="lg:ml-96 lg:min-h-screen">
    <div class="px-4 py-8 sm:px-8">
      <slot />
    </div>

    <div class="h-10" />
  </main>
</template>
