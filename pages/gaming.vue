<script setup lang="ts">
useHead({
  title: title('Gaming Profiles'),
})

const GGAPP = 'https://ggapp.io/simonorono'
const SUPEREFFECTIVE =
  'https://supereffective.gg/apps/livingdex/fOHUWMujCcNduz4leWjM'
const PHOTOMODE = 'https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3'
</script>

<template>
  <BackToIndex />

  <div class="prose mt-6 space-y-6 text-lg sm:max-w-lg">
    <h1 class="text-3xl font-medium">Gaming profile</h1>

    <p>
      I can be found on
      <GamingLink :href="GGAPP">GGApp</GamingLink>,
      <GamingLink :href="SUPEREFFECTIVE">supereffective.gg</GamingLink> and
      <GamingLink :href="PHOTOMODE">photomode.io</GamingLink>. Here are some
      gaming related friend codes:
    </p>

    <FriendCode title="Discord" code="simonorono" />

    <FriendCode title="Nintendo Switch Friend Code" code="SW-6250-6376-2138" />
  </div>
</template>
