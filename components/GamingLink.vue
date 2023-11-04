<script setup lang="ts">
const { href } = defineProps<{ href: string }>()
</script>

<template>
  <NuxtLink :href="href" target="_blank" class="link">
    <slot /><span class="sr-only">&nbsp;(opens in new window)</span>
  </NuxtLink>
</template>
