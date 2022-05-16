import { useButton } from '@hooks'

const Button = (props: IButton) => {
  const { resolveStyles } = useButton()
  const { onClick, children } = props
  const componentClasses = resolveStyles(props)

  const handleClick = (e: any) => {
    onClick && onClick(e)
  }
  
  return (
    <button className={componentClasses} onClick={(e) => handleClick(e)}>
      {children}
    </button>
  )
}

export default Button