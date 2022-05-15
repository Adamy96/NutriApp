import { SearchSvg } from '@assets/svg'
import styles from './styles.module.scss'

const Searchbar = ({
  classes = '',
  placeholder = '',
  onChangeText,
  value
}: SearchbarProps) => {
  return (
    <div className={`${styles.searchbar} ${classes}`}>
      <input
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
      />
      <SearchSvg />
    </div>
  )
}

export default Searchbar

type SearchbarProps = {
  classes?: string
  placeholder?: string
  onChangeText: any
  value: string
}