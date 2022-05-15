// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IMealsPageState {
  searchText: string,
  foods: IFood[]
}

interface IContextState {
  mealsPageState: IMealsPageState
  setMealsPageState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IMealsPageState = {
  searchText: '',
  foods: []
}

export const MealsPageContext = createContext<IContextState>(null)

const ThemeContextProvider = ({ children }: any) => {
  const [mealsPageState, setMealsPageState] = useState(initialState)
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