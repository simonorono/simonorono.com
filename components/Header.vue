<script setup lang="ts">
const route = useRoute()

const NAME = 'Simón Oroño'
</script>

<template>
  <div
    :class="
      [
        'flex min-h-full flex-col items-center justify-center space-y-8 p-10',
        'border-b border-slate-300 bg-slate-100 shadow-lg lg:border-b-0 lg:border-r',
      ].join(' ')
    "
  >
    <NuxtLink class="u-url u-uid block" to="/" rel="me">
      <ProfilePicture />
    </NuxtLink>

    <NuxtLink
      class="p-name text-center text-xl font-medium lg:w-full lg:text-left"
      to="/"
    >
      <h1 v-if="route.path === '/'">{{ NAME }}</h1>
      <h2 v-else>{{ NAME }}</h2>
    </NuxtLink>

    <ProfileLinks classes="lg:hidden" />

    <article class="p-note prose prose-slate hidden lg:block">
      <Bio />
    </article>

    <ProfileLinks classes="hidden grow lg:block" />
  </div>
</template>
