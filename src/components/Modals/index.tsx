import AddFoodModal from './AddFood'
import { useModals } from '@hooks'
import { CloseSvg } from '@assets/svg'
import styles from './styles.module.scss'

const Modals = () => {
  const { modalsState, closeModals } = useModals()

  const contentType = {
    addFoodModal: <AddFoodModal food={modalsState.addFoodModalData} />,
    none: null
  }

  const modalComponent = contentType[modalsState.current]
  if (!modalComponent) return null

  return (
    <div className={styles.modals}>
      <div className={styles.container}>
        {modalComponent}
        <CloseSvg onClick={() => closeModals()} className={styles.closeSvg} />
      </div>
    </div>
  )
}

export default Modals