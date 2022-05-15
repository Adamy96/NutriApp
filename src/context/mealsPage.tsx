import React, { createContext, useState } from 'react'

interface IMealsPageState {
  searchText: string,
  foods: IFood[]
}

const initialState: IMealsPageState = {
  searchText: '',
  foods: []
}

export const MealsPageContext = createContext({
  mealsPageState: initialState,
  setMealsPageState: useState(initialState)[1]
})

const ThemeContextProvider = ({ children }: any) => {
  const [mealsPageState, setMealsPageState] = useState<IMealsPageState>(initialState)
  return (
    <MealsPageContext.Provider
      value={{
        mealsPageState,
        setMealsPageState
      }}
    >
      {children}
    </MealsPageContext.Provider>
  )
}

export default ThemeContextProvider