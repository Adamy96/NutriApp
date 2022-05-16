import Image from 'next/image'
import { uid } from 'uid'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Chart, Input, Typography } from '@components'
import { useChart, useMeals } from '@hooks'
import styles from './styles.module.scss'

const AddFoodModal = ({ food }: AddFoodModalProps) => {
  const { parseNutrientsToBarChart } = useChart()
  const [inputText, setInputText] = useState('')
  const { addFood } = useMeals()

  const handleClickAdd = () => {
    if (inputText) {
      addFood(food, +inputText)
      toast(
        `Added ${inputText} grams of ${food.label} to your database!`,
        {
          type: 'success',
          toastId: uid(),
          autoClose: 3500
        }
      )
    }
  }

  return (
    <div className={styles.addFoodModal}>
      <Typography
        align='center'
        variant='h3'
        size='sm'
        weight='bold'
        ellipsis={true}
        classes={styles.title}
      >
        {food.label}
      </Typography>
      <Image
        src={food.image ? food.image : '/assets/webp/noImage.webp'}
        width={140}
        height={140}
        layout='intrinsic'
      />
      
      <Chart variant='bar' data={parseNutrientsToBarChart(food.nutrients)} />
      
      <Input
        onChangeText={setInputText}
        value={inputText}
        placeholder='Enter how much you ate (in grams)'
        classes={styles.input}
        type='number'
      />

      <Button variant='cta' borderRadius='md' height='lg' classes={styles.ctaBtn} onClick={handleClickAdd}>
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