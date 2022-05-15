import { FoodList, Typography } from '@components'
import styles from './styles.module.scss'

const SearchResults = ({ searchText, foods }: SearchResultsProps) => {
  return (
    <div className={styles.searchResults}>
      {foods.length ? (
        <>
          <Typography variant='h3' size='sm' weight='semiBold' classes={styles.subtitle}>
            Search Results for "{searchText}"
          </Typography>
          <FoodList foods={foods} cardsPerRow={3} />
          </>
      ) : (
        <Typography variant='body' align='center' size='sm' >
          No results to this search
        </Typography>
      )}
    </div>
  )
}

export default SearchResults

interface SearchResultsProps {
  searchText: string,
  foods: IFood[]
}