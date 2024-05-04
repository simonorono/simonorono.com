<script setup lang="ts">
const config = useRuntimeConfig()

const gravatarHash = config.public.gravatarHash

const DESKTOP_SQUARE_SIDE = 250
const MOBILE_SQUARE_SIDE = 200
</script>

<template>
  <div
    v-if="gravatarHash"
    class="h-[200px] w-[200px] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 lg:h-[250px] lg:w-[250px]"
  >
    <picture>
      <source
        :height="MOBILE_SQUARE_SIDE"
        :width="MOBILE_SQUARE_SIDE"
        media="(max-width: 1023px)"
        :srcset="`https://www.gravatar.com/avatar/${gravatarHash}.webp?s=${MOBILE_SQUARE_SIDE}`"
      />
      <source
        :height="DESKTOP_SQUARE_SIDE"
        :width="DESKTOP_SQUARE_SIDE"
        media="(min-width: 1024px)"
        :srcset="`https://www.gravatar.com/avatar/${gravatarHash}.webp?s=${DESKTOP_SQUARE_SIDE}`"
      />
      <img
        :height="DESKTOP_SQUARE_SIDE"
        :width="DESKTOP_SQUARE_SIDE"
        :src="`https://www.gravatar.com/avatar/${gravatarHash}.webp?s=${DESKTOP_SQUARE_SIDE}`"
        alt="cartoon depiction of Simón Oroño"
        class="u-photo"
      />
    </picture>
  </div>
</template>
