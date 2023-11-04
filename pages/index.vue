<script setup lang="ts">
import otherLinks from '../data/other-links.json'
</script>

<template>
  <div class="space-y-8">
    <div class="prose">
      <div class="lg:hidden">
        <Bio />
      </div>
      <h2 class="mt-0 text-3xl font-medium">Projects</h2>

      <p>
        Besides writing code for a living, I also like writing code for
        recreational purposes. Here's a list of projects I've written in my free
        time.
      </p>
    </div>

    <Projects />

    <hr />

    <div>
      <h2 class="text-2xl font-medium">Other links</h2>

      <ul class="ml-4 mt-4 list-disc">
        <li v-for="{ href, label } in otherLinks" :key="href">
          <NuxtLink class="link" :href="href" target="_blank">
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
