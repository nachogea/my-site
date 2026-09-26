<template>
  <div class="min-h-screen antialiased">
    <div
      class="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-10 sm:px-8 md:flex-row md:gap-16 md:py-20"
    >
      <AppHeader class="md:w-44 md:shrink-0" />

      <div class="flex min-w-0 flex-1 flex-col gap-12">
        <main class="flex-1">
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>
