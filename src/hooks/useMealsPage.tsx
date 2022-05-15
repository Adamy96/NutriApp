import { useContext } from 'react'
import { MealsPageContext } from '@context/mealsPage'

const useMealsPage = () => {
  const { mealsPageState, setMealsPageState } = useContext(MealsPageContext)

  const updateMealsPageState = (searchText: string, foods: IFood[]) => {
    setMealsPageState({
      ...mealsPageState,
      searchText,
      foods
    })
  }

  return {
    searchText: mealsPageState.searchText,
    foods: mealsPageState.foods,
    updateMealsPageState
  }
}

export default useMealsPage