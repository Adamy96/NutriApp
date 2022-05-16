import { useContext } from 'react'
import { contrastTheme } from '@themes'
import { ThemeContext } from '@context/theme'

const useTheme = () => {
  const { themeState, setThemeState } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = themeState.theme === 'default'
      ? 'contrast'
      : 'default'
    
    setThemeState({ theme: newTheme }) // Updating context
    setCustomTheme(newTheme) // Updating :root variables
  }

  const setCustomTheme = (theme: string) => {
    if (theme === 'contrast') {
      document.head.innerHTML += `<style id="contrastTheme">
      :root {
        ${Object.keys(contrastTheme)
          .map((item) => `${item}: ${contrastTheme[item]};`)
          .join('')}
      }
      </style>`
    } else {
      const styleTag = document.getElementById('contrastTheme')
      if (!styleTag) return
      styleTag?.parentElement?.removeChild(styleTag)
    }
  }

  return {
    toggleTheme,
    themeState
  }
}

export default useTheme
