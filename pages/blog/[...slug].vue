<template>
  <article class="w-full max-w-3xl mx-auto" v-if="post">
    <!-- Back Link -->
    <NuxtLink to="/blog" class="btn btn-ghost btn-sm mb-6 gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to blog
    </NuxtLink>

    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ post.title }}</h1>
      
      <div class="flex flex-wrap items-center gap-4 text-sm text-base-content/60 mb-4">
        <time v-if="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.readingTime" class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ post.readingTime }} min read
        </span>
      </div>

      <div class="flex flex-wrap gap-2" v-if="post.tags?.length">
        <NuxtLink
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog`"
          class="badge badge-primary badge-outline hover:badge-primary transition-colors"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </header>

    <!-- Featured Image -->
    <figure v-if="post.image" class="mb-8 rounded-lg overflow-hidden">
      <img :src="post.image" :alt="post.title" class="w-full" />
    </figure>

    <!-- Content -->
    <div class="prose prose-lg max-w-none">
      <ContentRenderer :value="post" />
    </div>

    <!-- Footer -->
    <footer class="mt-12 pt-8 border-t border-base-300">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p class="text-base-content/60 text-sm">Thanks for reading!</p>
          <p class="text-base-content/60 text-sm">
            Feel free to connect with me on 
            <a href="https://www.linkedin.com/in/ignaciogea/" target="_blank" class="link link-primary">LinkedIn</a> or 
            <a href="https://x.com/nachogea_" target="_blank" class="link link-primary">Twitter/X</a>.
          </p>
        </div>
        <NuxtLink to="/blog" class="btn btn-primary btn-sm">
          More posts
        </NuxtLink>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get the slug from the route
const slug = computed(() => {
  const parts = route.params.slug
  if (Array.isArray(parts)) {
    return parts.join('/')
  }
  return parts || ''
})

// Query the blog post using the collection API
const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog')
    .path(`/blog/${slug.value}`)
    .first()
)

useHead({
  title: () => post.value?.title ? `${post.value.title} - Ignacio Gea` : 'Blog - Ignacio Gea',
  meta: [
    { name: 'description', content: () => post.value?.description || '' },
    { property: 'og:title', content: () => post.value?.title || '' },
    { property: 'og:description', content: () => post.value?.description || '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: () => post.value?.image || '' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>
