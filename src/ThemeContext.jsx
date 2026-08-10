import { createContext, useContext, useState, useEffect } from 'react'
import { themes } from './data/content'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('lavender')
  const [mode, setMode] = useState('light')
  const [custom, setCustom] = useState({ primary: '#8B85E8', secondary: '#6FB4EA', tertiary: '#7FD8C6' })
  const [useCustom, setUseCustom] = useState(false)

  useEffect(() => {
    const t = useCustom ? custom : themes[themeKey]
    const root = document.documentElement
    root.style.setProperty('--accent-primary', t.primary)
    root.style.setProperty('--accent-secondary', t.secondary)
    root.style.setProperty('--accent-tertiary', t.tertiary || t.secondary)
    root.setAttribute('data-mode', mode)
  }, [themeKey, mode, custom, useCustom])

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, mode, setMode, custom, setCustom, useCustom, setUseCustom }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
