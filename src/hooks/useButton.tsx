import styles from '@components/Button/styles.module.scss'

const useButton = () => {
  const resolveStyles = ({ borderRadius, classes, height, variant }: IButton) => {
    let classBundle = [
      styles.button,
      styles[`borderRadius-${borderRadius}`],
      styles[`height-${height}`],
      styles[`variant-${variant}`],
      classes
    ]

    return classBundle.join(' ')
  }

  return { resolveStyles }
}

export default useButton