<script setup lang="ts">
const route = useRoute()
useHead({
  title: title(),
  link: [{ rel: 'canonical', href: canonical(route.path) }],
})
</script>

<template>
  <nav>
    <NuxtLink to="/">Index</NuxtLink>
    <NuxtLink to="gaming">Gaming</NuxtLink>
  </nav>

  <slot />
</template>
