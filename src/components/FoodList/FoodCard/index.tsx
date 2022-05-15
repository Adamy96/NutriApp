import Image from 'next/image'
import { Typography } from '@components'
import styles from './styles.module.scss'

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className={styles.foodCard}>
      <Image
        src={food.image ? food.image : '/assets/webp/noImage.webp'}
        width={150}
        height={150}
        layout='responsive'
      />
      <div className={styles.content}>
        <Typography align='center' variant='body' size='sm' weight='semiBold'>
          {food.label}
        </Typography>
        <Typography align='center' variant='caption' size='md'>
          More information
        </Typography>
      </div>
    </div>
  )
}

export default FoodCard

interface FoodCardProps {
  food: IFood
}