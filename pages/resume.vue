<script setup lang="ts">
useHead({
  title: 'Resume - Ignacio Gea',
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h1 class="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
        Resume
      </h1>
      <p class="text-stone-600 dark:text-stone-400">
        Software engineer with 8+ years of experience.
        <a href="/IgnacioGeaResume.pdf" download class="link">Download the PDF</a>.
      </p>
    </div>

    <div class="overflow-hidden rounded border border-stone-200 dark:border-stone-800">
      <embed
        src="/IgnacioGeaResume.pdf"
        type="application/pdf"
        class="h-[80vh] min-h-[600px] w-full"
      />
    </div>
  </div>
</template>
