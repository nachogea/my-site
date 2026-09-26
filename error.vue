<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

useHead({
  title: 'Page not found - Ignacio Gea',
})
</script>

<template>
  <NuxtLayout>
    <div class="prose dark:prose-invert">
      <h1>Page not found</h1>
      <p>
        That page doesn't exist, or it moved.
        <a href="/">Head back home</a>.
      </p>
    </div>
  </NuxtLayout>
</template>
