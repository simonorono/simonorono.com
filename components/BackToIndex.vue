<script setup lang="ts">
const { classes } = defineProps<{ classes?: string }>()
</script>

<template>
  <NuxtLink
    to="/"
    :class="['group inline-block', classes].filter(Boolean).join(' ')"
  >
    ←
    <span
      class="cursor-pointer underline sm:no-underline sm:group-hover:underline"
    >
      back to index
    </span>
  </NuxtLink>
</template>
