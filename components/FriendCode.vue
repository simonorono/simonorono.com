<script setup lang="ts">
const { code, title } = defineProps<{
  code: string
  title: string
}>()
</script>

<template>
  <p>
    <b>{{ title }}</b>
    <br />
    <span class="whitespace-nowrap font-mono">{{ code }}</span>
  </p>
</template>
