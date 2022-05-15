import { useContext } from 'react'
import { initialState, ModalsContext } from '@context/modals'

const useModals = () => {
  const { modalsState, setModalsState } = useContext(ModalsContext)

  const openAddFoodModal = (food: IFood) => {
    setModalsState({
      ...initialState,
      addFoodModalData: food,
      current: 'addFoodModal'
    })
  }

  const closeModals = () => {
    setModalsState(initialState)
  }

  return {
    modalsState,
    openAddFoodModal,
    closeModals
  }
}

export default useModals
