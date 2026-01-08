<script setup>
import IgnacioPersonalPhoto from "/img/IgnacioPersonalPhoto.jpg";

useHead({
  title: 'Ignacio Gea - Software Engineer'
})
</script>

<template>
  <div class="flex flex-col items-center max-w-3xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-8">
      <div class="avatar mb-4">
        <div class="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img :src="IgnacioPersonalPhoto" alt="Photo of Ignacio" />
        </div>
      </div>
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Hola, mi nombre es <span class="text-primary">Ignacio</span>
      </h1>
    </section>

    <!-- Terminal Bio -->
    <section class="w-full mb-8">
      <div class="mockup-code bg-base-300">
        <pre data-prefix="$" class="text-accent"><code>whoami</code></pre>
        <pre data-prefix=">" class="text-base-content"><code>Software Engineer @ <a href="https://vantage.sh" target="_blank" class="text-primary hover:underline">Vantage</a> (cloud cost management)</code></pre>
        <pre data-prefix=">" class="text-base-content"><code>Based in NYC, have lived in many places, originally from Mexico</code></pre>
        <pre data-prefix=">" class="text-base-content"><code>Fluent in English and Spanish</code></pre>
        <pre data-prefix="$" class="text-accent mt-2"><code>cat interests.txt</code></pre>
        <pre data-prefix=">" class="text-base-content"><code>family, technology, travel, culture</code></pre>
        <pre data-prefix=">" class="text-base-content"><code>music, fitness, good food, occasional beer</code></pre>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="w-full">
      <h2 class="text-xl font-bold mb-4 text-center">Explore</h2>
      <div class="grid gap-4 md:grid-cols-3">
        <NuxtLink
          to="/blog"
          class="card bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1"
        >
          <div class="card-body items-center text-center p-6">
            <div class="text-3xl mb-2">📝</div>
            <h3 class="card-title text-lg">Blog</h3>
            <p class="text-sm text-base-content/60">Career insights & lessons</p>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/hard-skills"
          class="card bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1"
        >
          <div class="card-body items-center text-center p-6">
            <div class="text-3xl mb-2">💻</div>
            <h3 class="card-title text-lg">Skills</h3>
            <p class="text-sm text-base-content/60">Technical expertise</p>
          </div>
        </NuxtLink>

        <a
          href="https://www.linkedin.com/in/ignaciogea/"
          target="_blank"
          rel="noopener noreferrer"
          class="card bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1"
        >
          <div class="card-body items-center text-center p-6">
            <div class="text-3xl mb-2">💼</div>
            <h3 class="card-title text-lg">Connect</h3>
            <p class="text-sm text-base-content/60">Let's chat on LinkedIn</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Current Focus -->
    <section class="w-full mt-12">
      <div class="alert bg-base-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-accent shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold">Currently</h3>
          <p class="text-sm text-base-content/70">
            Building features at Vantage to help companies understand and optimize their cloud spending.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
