<script setup lang="ts">
const { href, name, src } = defineProps<{
  href: string
  name: string
  src: string
}>()
</script>

<template>
  <a :href="href" class="inline-block" target="_blank">
    <img :alt="`${name} logo`" class="h-10 w-10" :src="src" />
    <span class="sr-only">{{ name }} profile (opens in new tab)</span>
  </a>
</template>
