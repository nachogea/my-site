<script setup lang="ts">
const socials = [
  { label: 'Email', href: 'mailto:igeagonz@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/nachogea' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ignacio-gea-0abaa6b6/' },
  { label: 'X', href: 'https://x.com/iggylooo' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="rule flex flex-col gap-3 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between dark:text-stone-400">
    <p>&copy; {{ year }} Ignacio Gea</p>
    <ul class="flex flex-wrap items-center gap-x-4 gap-y-1">
      <li v-for="social in socials" :key="social.label">
        <a
          :href="social.href"
          class="nav-link"
          :target="social.href.startsWith('http') ? '_blank' : undefined"
          :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          {{ social.label }}
        </a>
      </li>
    </ul>
  </footer>
</template>
