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

  <slot />
</template>
