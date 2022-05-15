import React from 'react'
import styles from '@components/Typography/styles.module.scss'

const useTypography = () => {
  const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    button: 'p',
    body: 'p',
    caption: 'span',
    subtitle: 'h6'
  }

  const createComponent = (params: ITypography) => {
    const componentClasses = resolveStyles(params)
    const { variant, children } = params
    const component = React.createElement(
      variantMapping[variant],
      {className: componentClasses},
      children
    )

    return component
  }

  const resolveStyles = ({ align, variant, size, weight, textShadow, ellipsis, classes }: ITypography) => {
    let classBundle = [
      styles.typography,
      align ? styles[`align-${align}`] : '',
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      weight ? styles[`weight-${weight}`] : '',
      ellipsis ? styles.ellipsis : '',
      textShadow ? styles[`textShadow-${textShadow}`] : '',
      classes
    ].filter(value => true)

    return classBundle.join(' ')
  }

  return { createComponent }
}

export default useTypography