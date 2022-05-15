import Image from 'next/image'
import { useState } from 'react'
import { Button, Charts, Input, Typography } from '@components'
import { useChart } from '@hooks'
import styles from './styles.module.scss'

const AddFoodModal = ({ food }: AddFoodModalProps) => {
  const { parseNutrientsToBarChart } = useChart()
  const [inputText, setInputText] = useState('')

  return (
    <div className={styles.addFoodModal}>
      <Typography align='center' variant='h3' size='sm' weight='bold' ellipsis={true}>
        {food.label}
      </Typography>
      <Image
        src={food.image ? food.image : '/assets/webp/noImage.webp'}
        width={140}
        height={140}
        layout='intrinsic'
      />
      
      <Charts variant='bar' data={parseNutrientsToBarChart(food.nutrients)} />
      
      <Input
        onChangeText={setInputText}
        value={inputText}
        placeholder='Enter how much you ate (in grams)'
        classes={styles.input}
        type='number'
      />

      <Button variant='cta' borderRadius='md' height='lg' classes={styles.ctaBtn}>
        <Typography variant='body' size='sm' weight='bold'>
            Add to your database
          </Typography>
      </Button>

      <Typography align='center' variant='caption' size='md' weight='semiBold'>
        *Values for 100g of {food.label}
      </Typography>
    </div>
  )
}

export default AddFoodModal

interface AddFoodModalProps {
  food: IFood
}