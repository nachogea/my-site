export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/**
 * Shared light/dark theme state. The active theme is applied as a class on
 * <html> so Tailwind's `dark:` variants and the prose styles both respond to it.
 */
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  const apply = (value: Theme) => {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', value === 'dark')
      document.documentElement.style.colorScheme = value
    }
  }

  const toggle = () => {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    apply(next)
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const init = () => {
    if (!import.meta.client) return
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (saved === 'light' || saved === 'dark') {
      apply(saved)
    } else {
      apply(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
  }

  return { theme, toggle, init }
}
