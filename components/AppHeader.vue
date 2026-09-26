<script setup lang="ts">
const { toggle } = useTheme()

const links = [
  { label: 'About', to: '/' },
  { label: 'Writing', to: '/blog' },
  { label: 'Skills', to: '/hard-skills' },
  { label: 'Resume', to: '/resume' },
]
</script>

<template>
  <header class="flex flex-col gap-6">
    <NuxtLink to="/" class="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-100">
      Ignacio Gea
    </NuxtLink>

    <div class="flex items-center justify-between md:flex-col md:items-start md:gap-6">
      <nav aria-label="Main">
        <ul class="flex items-center gap-5 text-sm md:flex-col md:items-start md:gap-2">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="nav-link"
              active-class="nav-link-active"
              :exact="link.to === '/'"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!--
        Both icons and labels are always rendered and switched with CSS so the
        markup is identical on the server and client. Rendering them from the
        theme state directly causes a hydration mismatch, because the server
        doesn't know the visitor's stored/system preference.
      -->
      <button
        type="button"
        class="nav-link flex items-center gap-1.5 text-sm"
        aria-label="Toggle color theme"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="hidden h-4 w-4 dark:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 dark:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <span class="sr-only md:not-sr-only dark:hidden">Dark</span>
        <span class="sr-only md:not-sr-only hidden dark:inline">Light</span>
      </button>
    </div>
  </header>
</template>
