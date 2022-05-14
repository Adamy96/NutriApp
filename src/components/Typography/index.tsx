import { useTypography } from "@hooks"
import styles from './styles.module.scss'

const Typography = (props: ITypography) => {
  const { createComponent } = useTypography()
  const component = createComponent(props)

  return component
}

export default Typography