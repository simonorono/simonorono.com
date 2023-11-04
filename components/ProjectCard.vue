<script setup lang="ts">
import LinkLogo from 'remixicon/icons/Editor/link-m.svg'
import CodeLogo from 'remixicon/icons/Development/code-s-slash-line.svg'

const { classes, project } = defineProps<{
  classes?: string
  project: Project
}>()

const { name, description, url, vcs } = project
</script>

<template>
  <div
    :class="`flex flex-col space-y-4 p-4 transition-all duration-300 fine-pointer:hover:shadow-project ${classes}`"
  >
    <h3 class="text-xl font-medium">{{ name }}</h3>

    <p class="prose flex-grow pt-2">{{ description }}</p>

    <div class="flex items-baseline space-x-4">
      <a
        v-if="url"
        class="link inline-flex items-center space-x-1"
        :href="url"
        target="_blank"
      >
        <img
          :src="LinkLogo"
          class="h-5 w-5 text-black"
          aria-hidden="true"
          alt="link logo"
        />
        <span class="sr-only">{name}</span>
        <span> Website</span>
        <span class="sr-only">&nbsp;(opens in new window)</span>
      </a>

      <a
        class="link inline-flex items-center space-x-1"
        :href="vcs"
        target="_blank"
      >
        <img
          :src="CodeLogo"
          class="h-5 w-5 text-black"
          aria-hidden="true"
          alt="repo logo"
        />
        <span class="sr-only">{{ name }}</span>
        <span> Repository</span>
        <span class="sr-only">&nbsp;(opens in new window)</span>
      </a>
    </div>
  </div>
</template>
