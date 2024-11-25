<script setup lang="ts">
import BlueskyLogo from 'remixicon/icons/Logos/bluesky-fill.svg'
import GithubLogo from 'remixicon/icons/Logos/github-fill.svg'
import LinkedInLogo from 'remixicon/icons/Logos/linkedin-box-fill.svg'
import StackOverflowLogo from 'remixicon/icons/Logos/stack-overflow-fill.svg'

const { classes } = defineProps<{ classes: string }>()
</script>

<template>
  <div :class="['space-x-6', classes].filter(Boolean).join(' ')">
    <ProfileLinkLogo
      href="https://bsky.app/profile/simonorono.com"
      name="bluesky"
      :src="BlueskyLogo"
    />

    <ProfileLinkLogo
      href="https://www.linkedin.com/in/simonorono"
      name="linkedin"
      :src="LinkedInLogo"
    />

    <ProfileLinkLogo
      href="https://github.com/simonorono"
      name="github"
      :src="GithubLogo"
    />

    <ProfileLinkLogo
      href="https://stackoverflow.com/users/3001663/sim%c3%b3n-oro%c3%b1o"
      name="stack overflow"
      :src="StackOverflowLogo"
    />
  </div>
</template>
