import styles from './styles.module.scss'

const Dropdown = ({ options, onChange, classes }: DropdownProps) => {
  return (
    <select
      className={`${styles.dropdown} ${classes}`}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, idx) => (
        <option value={option} key={idx}>{option}</option>
      ))}
    </select>
  )
}

export default Dropdown

interface DropdownProps {
  options: string[]
  classes?: string
  onChange(args: any): any
}