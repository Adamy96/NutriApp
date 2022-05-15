import { SearchSvg } from '@assets/svg'
import styles from './styles.module.scss'

const Input = ({
  classes = '',
  placeholder = '',
  onChangeText,
  value,
  isSearchbar = false,
  type = 'text'
}: InputProps) => {
  const searchbarClass = isSearchbar ? styles.searchbar : ''

  return (
    <div className={`${styles.input} ${searchbarClass} ${classes}`}>
      <input
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
      {isSearchbar && <SearchSvg />}
    </div>
  )
}

export default Input

type InputProps = {
  classes?: string
  placeholder?: string
  onChangeText: any
  value: string,
  isSearchbar?: boolean
  type?: string
}