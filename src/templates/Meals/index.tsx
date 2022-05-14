import { Typography } from "@components"
import styles from './styles.module.scss'

const Meals = () => {
  return (
    <div className={styles.meals}>
      <Typography variant='h1' weight='bold' size='lg'>
        Meals
      </Typography>
    </div>
  )
}

export default Meals