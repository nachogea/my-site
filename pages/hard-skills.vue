<script setup lang="ts">
const groups = [
  {
    title: 'Languages',
    items: ['JavaScript / TypeScript', 'Ruby', 'Python', 'Java', 'Elixir'],
  },
  {
    title: 'Frameworks',
    items: ['Ruby on Rails', 'Vue / Nuxt', 'React / Next.js', 'Express'],
  },
  {
    title: 'Infrastructure',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Datadog', 'Sentry'],
  },
  {
    title: 'Practices',
    items: [
      'Clean, scalable code',
      'OOP and functional programming',
      'MVC architecture',
      'Production monitoring',
    ],
  },
]

useHead({
  title: 'Skills - Ignacio Gea',
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
      Skills
    </h1>

    <div class="flex flex-col gap-8">
      <section v-for="group in groups" :key="group.title" class="flex flex-col gap-2">
        <h2 class="text-sm font-semibold text-stone-900 dark:text-stone-100">
          {{ group.title }}
        </h2>
        <p class="text-stone-600 dark:text-stone-400">
          {{ group.items.join(', ') }}
        </p>
      </section>
    </div>

    <p class="rule pt-6 text-sm text-stone-500 dark:text-stone-400">
      I also care a lot about the non-technical side: communication, ownership,
      documentation, and helping the people around me do their best work.
    </p>

    <p class="text-sm text-stone-500 dark:text-stone-400">
      For what it's worth, I don't hold strong opinions on programming paradigms
      or languages. These days we're writing software in English as much as
      anything else, so clear thinking and communication matter even more so now.
    </p>
  </div>
</template>
