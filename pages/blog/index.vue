<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
      <p class="text-base-content/70">
        Career insights, lessons learned, and reflections on the software engineering journey.
      </p>
    </div>

    <!-- Tag Filter -->
    <div class="mb-8" v-if="allTags.length > 0">
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-sm text-base-content/60 mr-2">Filter by tag:</span>
        <button
          @click="selectedTag = null"
          class="btn btn-xs"
          :class="selectedTag === null ? 'btn-primary' : 'btn-ghost'"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="selectedTag = tag"
          class="btn btn-xs"
          :class="selectedTag === tag ? 'btn-primary' : 'btn-ghost'"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <NuxtLink
        v-for="post in filteredPosts"
        :key="post.path"
        :to="post.path"
        class="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      >
        <figure v-if="post.image" class="h-48 overflow-hidden">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-lg">{{ post.title }}</h2>
          <p class="text-sm text-base-content/70 line-clamp-2">
            {{ post.description }}
          </p>
          <div class="flex items-center justify-between mt-4">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="badge badge-sm badge-outline"
              >
                {{ tag }}
              </span>
            </div>
            <div class="text-xs text-base-content/50 flex items-center gap-2">
              <span>{{ formatDate(post.date) }}</span>
              <span v-if="post.readingTime">{{ post.readingTime }} min read</span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Empty State -->
    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <p class="text-base-content/60">No posts found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedTag = ref(null)

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

const allTags = computed(() => {
  if (!posts.value) return []
  const tags = new Set<string>()
  posts.value.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedTag.value) return posts.value
  return posts.value.filter(post => post.tags?.includes(selectedTag.value))
})

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

useHead({
  title: 'Blog - Ignacio Gea',
  meta: [
    { name: 'description', content: 'Career insights and lessons from a software engineer' }
  ]
})
</script>
