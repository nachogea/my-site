<script setup>
useHead({
  title: 'Resume - Ignacio Gea'
})
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
        <p class="text-base-content/70">Software Engineer with 8+ years of experience</p>
      </div>
      <a
        href="/IgnacioGeaResume.pdf"
        download="IgnacioGea-Resume.pdf"
        class="btn btn-primary gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PDF
      </a>
    </div>

    <!-- PDF Embed -->
    <div class="w-full bg-base-200 rounded-lg overflow-hidden" style="height: 80vh; min-height: 600px;">
      <embed
        src="/IgnacioGeaResume.pdf"
        type="application/pdf"
        class="w-full h-full"
      />
    </div>

    <!-- Fallback for browsers that don't support PDF embed -->
    <noscript>
      <div class="text-center py-8">
        <p class="text-base-content/70 mb-4">
          Unable to display PDF. Please download it directly.
        </p>
        <a href="/IgnacioGeaResume.pdf" download class="btn btn-primary">
          Download Resume
        </a>
      </div>
    </noscript>
  </div>
</template>
