// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IContextState {
  themeState: IThemeState
  setThemeState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IThemeState = {
  theme: 'default'
}

export const ThemeContext = createContext<IContextState>(null)

const ThemeContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState<IThemeState>(initialState)
  return (
    <ThemeContext.Provider
      value={{
        themeState,
        setThemeState
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
