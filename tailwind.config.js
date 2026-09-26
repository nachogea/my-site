/** @type {import('tailwindcss').Config} */

// Stacks are kept as explicit strings because the typography plugin injects
// them verbatim into CSS. Family names containing digits must be quoted, or
// the browser discards the whole declaration.
const sansStack =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
const serifStack = 'Georgia, Cambria, "Times New Roman", Times, serif'
const monoStack =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: sansStack.split(", "),
        serif: serifStack.split(", "),
        mono: monoStack.split(", "),
      },
      colors: {
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          strong: "rgb(var(--accent-strong) / <alpha-value>)",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            fontFamily: serifStack,
            fontSize: "1.0625rem",
            lineHeight: "1.75",
            "h1, h2, h3, h4": {
              fontFamily: sansStack,
              fontWeight: "600",
              letterSpacing: "-0.011em",
            },
            "code, pre, kbd": {
              fontFamily: monoStack,
            },
            "--tw-prose-body": theme("colors.stone.700"),
            "--tw-prose-headings": theme("colors.stone.900"),
            "--tw-prose-lead": theme("colors.stone.600"),
            "--tw-prose-links": "rgb(var(--accent-strong))",
            "--tw-prose-bold": theme("colors.stone.900"),
            "--tw-prose-counters": theme("colors.stone.500"),
            "--tw-prose-bullets": theme("colors.stone.300"),
            "--tw-prose-hr": theme("colors.stone.200"),
            "--tw-prose-quotes": theme("colors.stone.900"),
            "--tw-prose-quote-borders": theme("colors.stone.200"),
            "--tw-prose-captions": theme("colors.stone.500"),
            "--tw-prose-code": theme("colors.stone.800"),
            "--tw-prose-pre-code": theme("colors.stone.200"),
            "--tw-prose-pre-bg": theme("colors.stone.900"),
            "--tw-prose-th-borders": theme("colors.stone.300"),
            "--tw-prose-td-borders": theme("colors.stone.200"),
          },
        },
        invert: {
          css: {
            fontFamily: serifStack,
            "--tw-prose-body": theme("colors.stone.300"),
            "--tw-prose-headings": theme("colors.stone.100"),
            "--tw-prose-lead": theme("colors.stone.400"),
            "--tw-prose-links": "rgb(var(--accent))",
            "--tw-prose-bold": theme("colors.stone.100"),
            "--tw-prose-counters": theme("colors.stone.400"),
            "--tw-prose-bullets": theme("colors.stone.600"),
            "--tw-prose-hr": theme("colors.stone.800"),
            "--tw-prose-quotes": theme("colors.stone.100"),
            "--tw-prose-quote-borders": theme("colors.stone.800"),
            "--tw-prose-captions": theme("colors.stone.400"),
            "--tw-prose-code": theme("colors.stone.200"),
            "--tw-prose-pre-code": theme("colors.stone.200"),
            "--tw-prose-pre-bg": theme("colors.stone.900"),
            "--tw-prose-th-borders": theme("colors.stone.700"),
            "--tw-prose-td-borders": theme("colors.stone.800"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
