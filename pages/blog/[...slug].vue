<script setup lang="ts">
const route = useRoute()

const formatDate = (date?: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const slug = computed(() => {
  const parts = route.params.slug
  return Array.isArray(parts) ? parts.join('/') : parts || ''
})

const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog').path(`/blog/${slug.value}`).first()
)

useHead({
  title: () => (post.value?.title ? `${post.value.title} - Ignacio Gea` : 'Writing - Ignacio Gea'),
  meta: [
    { name: 'description', content: () => post.value?.description || '' },
    { property: 'og:title', content: () => post.value?.title || '' },
    { property: 'og:description', content: () => post.value?.description || '' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary' },
  ],
})
</script>

<template>
  <article v-if="post" class="flex flex-col gap-8">
    <header class="flex flex-col gap-3">
      <NuxtLink to="/blog" class="nav-link text-sm">&larr; Writing</NuxtLink>
      <h1 class="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
        {{ post.title }}
      </h1>
      <p class="text-sm text-stone-500 dark:text-stone-400">
        <time v-if="post.date" :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.readingTime"> &middot; {{ post.readingTime }} min read</span>
      </p>
    </header>

    <div class="prose dark:prose-invert">
      <ContentRenderer :value="post" />
    </div>

    <footer class="rule pt-6 text-sm text-stone-500 dark:text-stone-400">
      <p>
        Thanks for reading. Reach me on
        <a
          href="https://www.linkedin.com/in/ignaciogea/"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >LinkedIn</a>
        or
        <a
          href="https://x.com/nachogea_"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >X</a>.
      </p>
    </footer>
  </article>
</template>
