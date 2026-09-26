<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const { init } = useTheme()

init()
</script>

<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
