import { CloseSvg } from '@assets/svg'
import { useModals, useClickOutside } from '@hooks'
import React from 'react'
import AddFoodModal from './AddFood'
import styles from './styles.module.scss'

const Modals = () => {
  const { modalsState, closeModals } = useModals()
  const domNode = useClickOutside(closeModals)

  const contentType = {
    addFoodModal: <AddFoodModal food={modalsState.addFoodModalData} />,
    none: null
  }

  const modalComponent = contentType[modalsState.current]
  if (!modalComponent) return null

  return (
    <div className={styles.modals}>
      <div className={styles.container} ref={domNode}>
        {modalComponent}
        <CloseSvg onClick={() => closeModals()} className={styles.closeSvg} />
      </div>
    </div>
  )
}

export default Modals