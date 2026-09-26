<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const formatDate = (date?: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useHead({
  title: 'Writing - Ignacio Gea',
  meta: [
    {
      name: 'description',
      content: 'Career insights and lessons from a software engineer.',
    },
  ],
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
      Writing
    </h1>

    <ul v-if="posts?.length" class="flex flex-col gap-8">
      <li v-for="post in posts" :key="post.path" class="flex flex-col gap-1">
        <NuxtLink
          :to="post.path"
          class="link text-lg font-semibold tracking-tight no-underline decoration-transparent hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
        <p class="text-sm text-stone-500 dark:text-stone-400">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span v-if="post.readingTime"> &middot; {{ post.readingTime }} min read</span>
        </p>
        <p class="text-stone-600 dark:text-stone-400">{{ post.description }}</p>
      </li>
    </ul>

    <p v-else class="text-stone-500 dark:text-stone-400">
      Nothing published yet. Check back soon.
    </p>
  </div>
</template>
