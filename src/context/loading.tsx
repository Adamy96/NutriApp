import React, { createContext, useState } from 'react'

interface ILoadingState {
  apiFoodsLoading: boolean
}

interface ILoading {
  loadingState: ILoadingState
  setLoadingState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: ILoadingState = {
  apiFoodsLoading: false
}

export const LoadingContext = createContext<ILoading | undefined>(undefined)

const LoadingContextProvider = ({ children }: any) => {
  const [loadingState, setLoadingState] = useState<ILoadingState>(initialState)
  return (
    <LoadingContext.Provider
      value={{
        loadingState,
        setLoadingState
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider