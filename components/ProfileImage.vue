<script setup lang="ts">
const config = useRuntimeConfig()

const gravatarHash = config.public.gravatarHash

const { classes, size } = defineProps<{ classes: string; size: number }>()
</script>

<template>
  <img
    loading="lazy"
    alt="Simón Oroño's profile picture"
    :class="classes"
    :src="`https://www.gravatar.com/avatar/${gravatarHash}.webp?s=${size}`"
    :height="size"
    :width="size"
  />
</template>
