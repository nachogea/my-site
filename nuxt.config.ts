// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-01-08",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  content: {
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
        light: "github-light",
      },
    },
  },
  app: {
    head: {
      title: "Ignacio Gea",
      meta: [
        {
          name: "description",
          content:
            "Ignacio's personal website - Software Engineer sharing career insights and technical knowledge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          property: "og:title",
          content: "Ignacio Gea - Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Software Engineer sharing career insights and technical knowledge",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.svg" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Ignacio Gea - Blog RSS",
          href: "/rss.xml",
        },
      ],
    },
  },
});
