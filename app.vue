<template>
  <Analytics />
  <div
    class="min-h-screen bg-base-100 text-base-content transition-colors duration-300"
    :data-theme="theme"
  >
    <div
      class="py-8 px-6 md:px-12 flex flex-col min-h-screen max-w-6xl mx-auto"
    >
      <AppNavigation class="mb-12" @toggle-theme="toggleTheme" :theme="theme" />
      <main class="flex-1 mb-12">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { Analytics } from "@vercel/analytics/nuxt";

const theme = ref("light");

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  if (process.client) {
    localStorage.setItem("theme", theme.value);
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.value = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme.value = "dark";
  }
});
</script>
