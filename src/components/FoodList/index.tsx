import FoodCard from './FoodCard'
import styles from './styles.module.scss'

const FoodList = ({ foods, cardsPerRow }: FoodListProps) => {
  return (
    <div className={`${styles.foodList} ${styles[`cardsPerRow-${cardsPerRow}`]}`}>
      {foods.map((food, idx) => <FoodCard food={food} key={idx} />)}
    </div>
  )
}

interface FoodListProps {
  foods: IFood[]
  cardsPerRow: number
}

export default FoodList