<template>
  <nav class="navbar bg-base-200 rounded-lg px-4">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl font-mono">
        <span class="text-accent">~</span>/ignacio
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-1">
        <li>
          <NuxtLink to="/" class="font-mono" active-class="bg-base-300">
            about
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="font-mono" active-class="bg-base-300">
            blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/hard-skills" class="font-mono" active-class="bg-base-300">
            skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resume" class="font-mono" active-class="bg-base-300">
            resume
          </NuxtLink>
        </li>
      </ul>
      
      <!-- Theme Toggle -->
      <button
        @click="$emit('toggle-theme')"
        class="btn btn-ghost btn-circle ml-2"
        :title="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
      >
        <!-- Sun icon (shown in dark mode) -->
        <svg
          v-if="theme === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <!-- Moon icon (shown in light mode) -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'light'
  }
})

defineEmits(['toggle-theme'])
</script>
