import React, { createContext, useState } from 'react'

interface ILoadingState {
  apiFoodsLoading: boolean
}

const initialState: ILoadingState = {
  apiFoodsLoading: false
}

export const LoadingContext = createContext({
  loadingState: initialState,
  setLoadingState: useState(initialState)[1]
})

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