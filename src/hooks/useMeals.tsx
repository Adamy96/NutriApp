import { useContext } from 'react'
import { MealsContext } from '@context/meals'

const useMeals = () => {
  const { mealsState, setMealsState } = useContext(MealsContext)

  const updateMealsState = (searchText: string, foods: IFood[]) => {
    setMealsState({
      ...mealsState,
      searchText,
      foods
    })
  }

  const addFood = (food: IFood, quantity: number) => {
    let addedFoods = mealsState.addedFoods
    const foodAlreadyAdded = mealsState.addedFoods.find(addedFood => (
      addedFood.foodId === food.foodId)
    )
    const incrementedAddedFoods = addedFoods.map(addedFood => {
      if (addedFood.foodId === food.foodId) {
        return {
          ...food,
          quantity: addedFood.quantity + quantity
        }
      }
      return { ...food }
    })

    const newAddedFoods = foodAlreadyAdded
      ? incrementedAddedFoods
      : [...addedFoods, { ...food, quantity }]

    setMealsState({
      ...mealsState,
      addedFoods: newAddedFoods
    })
  }

  const getAddedFoodNames = (): string[] => {
    return mealsState.addedFoods.map(addedFood => addedFood.label)
  }

  const getTotalCalories = (): number => {
    if (!mealsState.addedFoods.length) return 0

    return mealsState.addedFoods.reduce((acc, addedFood) => {
      return (addedFood.quantity * addedFood.nutrients.ENERC_KCAL / 100) + acc
    }, 0)
  }

  return {
    searchText: mealsState.searchText,
    foods: mealsState.foods,
    addedFoods: mealsState.addedFoods,
    getTotalCalories,
    getAddedFoodNames,
    updateMealsState,
    addFood
  }
}

export default useMeals