import { useButton } from '@hooks'

const Button = (props: IButton) => {
  const { resolveStyles } = useButton()
  const { onClick, children } = props
  const componentClasses = resolveStyles(props)

  console.log(componentClasses)

  const handleClick = () => {
    onClick && onClick()
  }
  
  return (
    <button className={componentClasses} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button