<script setup lang="ts">
const route = useRoute()

const NAME = 'Simón Oroño'
const NAME_CLASSES = 'p-name text-xl font-medium'
</script>

<template>
  <div
    :class="
      [
        'h-card flex flex-col items-center justify-center space-y-8 border-b',
        'border-slate-300 bg-slate-100 p-10 shadow-lg lg:fixed lg:inset-y-0',
        'lg:w-96 lg:justify-start lg:overflow-auto lg:border-b-0 lg:border-r',
      ].join(' ')
    "
  >
    <NuxtLink class="u-url u-uid block" to="/" rel="me">
      <ProfilePicture />
    </NuxtLink>

    <NuxtLink class="text-center lg:w-full lg:text-left" to="/">
      <h1 v-if="route.path === '/'" :class="NAME_CLASSES">{{ NAME }}</h1>
      <h2 v-else :class="NAME_CLASSES">{{ NAME }}</h2>
    </NuxtLink>

    <ProfileLinks classes="lg:hidden" />

    <article class="p-note prose prose-slate hidden grow lg:block">
      <Bio />
    </article>

    <ProfileLinks classes="hidden lg:block" />
  </div>
</template>
