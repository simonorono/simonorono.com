<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist & Software Developer.',
    },
  ],
})
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

    <div class="h-1" />
  </div>
</template>
