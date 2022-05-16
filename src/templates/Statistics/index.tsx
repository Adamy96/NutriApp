import { Chart, Typography } from "@components"
import { useMeals, useChart } from '@hooks'
import styles from './styles.module.scss'

const Statistics = () => {
  const { addedFoods, getTotalCalories } = useMeals()
  const { parseCaloriesPerAddedFood } = useChart()

  return (
    <div className={styles.statistics}>
      <Typography variant='h1' weight='bold' size='lg'>
        Statistics
      </Typography>
      <Typography variant='h3' size='sm' weight='semiBold' classes={styles.subtitle}>
        Your daily meals stats
      </Typography>
      <Typography variant='body' size='sm' weight='semiBold'>
        You consumed a total of {getTotalCalories().toFixed(2)} kilocalories today
      </Typography>

      <Chart
        variant='doughnut'
        data={parseCaloriesPerAddedFood(addedFoods)}
        labelPosition='bottom'
        classes={styles.chart}
        height={380}
      />
    </div>
  ) 
}

export default Statistics