import { useContext } from 'react'
import { LoadingContext } from '@context/loading'

const useLoading = () => {
  const { loadingState, setLoadingState } = useContext(LoadingContext)

  const updateFoodApiLoading = (value: boolean) => {
    setLoadingState({
      ...loadingState,
      apiFoodsLoading: value
    })
  }

  return {
    loadingState,
    updateFoodApiLoading
  }
}

export default useLoading