<script setup lang="ts">
const config = useRuntimeConfig()

const gravatarHash = config.public.gravatarHash

const DESKTOP_SQUARE_SIDE = 250
const MOBILE_SQUARE_SIDE = 200
</script>

<template>
  <div
    v-if="gravatarHash"
    class="overflow-hidden rounded-2xl border border-slate-300 bg-slate-200"
  >
    <ProfileImage classes="lg:hidden" :size="MOBILE_SQUARE_SIDE" />

    <ProfileImage classes="hidden lg:block" :size="DESKTOP_SQUARE_SIDE" />
  </div>
</template>
