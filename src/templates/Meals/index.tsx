import axios from 'axios'
import { useState, useEffect } from 'react'
import { Searchbar, Typography } from "@components"
import { useDebounce, useLoading, useMealsPage } from '@hooks'
import SearchResults from './SearchResults'
import styles from './styles.module.scss'

const Meals = () => {
  const {
    searchText: initialInputText,
    foods,
    updateMealsPageState
  } = useMealsPage()
  const { updateFoodApiLoading } = useLoading()
  const [inputText, setInputText] = useState(initialInputText)
  const [searchText, setSearchText] = useState(initialInputText)
  const updateSearchText = useDebounce(setSearchText, 600)

  useEffect(() => {
    updateSearchText(inputText)
  }, [inputText])

  useEffect(() => {
    if (searchText) {
      updateFoodApiLoading(true)
      axios.get(`${process.env.NextUrl}/api/getFood?foodName=${searchText}`)
        .then((res) => {
          updateFoodApiLoading(false)
          updateMealsPageState(searchText, res.data.foods)
        })
        .catch(err => updateFoodApiLoading(false))
    }
  }, [searchText])
  
  return (
    <div className={styles.meals}>
      <Typography variant='h1' weight='bold' size='lg'>
        Meals
      </Typography>

      <Searchbar
        value={inputText}
        onChangeText={setInputText}
        placeholder='Looking for some food information?'
        classes={styles.searchbar}
      />

      <SearchResults searchText={searchText} foods={foods} />
    </div>
  )
}

export default Meals