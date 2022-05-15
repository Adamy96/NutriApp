import React, { createContext, useState } from 'react'

interface IMealsPageState {
  searchText: string,
  foods: IFood[]
}

interface IMealsPage {
  mealsPageState: IMealsPageState
  setMealsPageState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IMealsPageState = {
  searchText: '',
  foods: []
}

export const MealsPageContext = createContext<IMealsPage | undefined>(undefined)

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