// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IModalsState {
  addFoodModalData: IAddFoodModal
  current: ValidModalsType
}

interface IContextState {
  modalsState: IModalsState
  setModalsState: React.Dispatch<React.SetStateAction<IModalsState>>
}

export const initialState: IModalsState = {
  addFoodModalData: null,
  current: 'none'
}

export const ModalsContext = createContext<IContextState>(null)

const ModalsContextProvider = ({ children }: any) => {
  const [modalsState, setModalsState] = useState<IModalsState>(initialState)

  return (
    <ModalsContext.Provider
      value={{
        modalsState,
        setModalsState
      }}
    >
      {children}
    </ModalsContext.Provider>
  )
}

export default ModalsContextProvider
