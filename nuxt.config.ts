export default defineNuxtConfig({
  compatibilityDate: '2026-01-08',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  app: {
    head: {
      title: 'Ignacio Gea',
      htmlAttrs: { lang: 'en' },
      // Applied before first paint so a dark-mode visitor never sees a white flash.
      script: [
        {
          innerHTML:
            "(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})()",
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            "Ignacio Gea - software engineer writing about career lessons and building software.",
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: 'Ignacio Gea' },
        {
          property: 'og:description',
          content: 'Software engineer writing about career lessons and building software.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Ignacio Gea - Writing RSS',
          href: '/rss.xml',
        },
      ],
    },
  },
})
