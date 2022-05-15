interface ITypography {
  align?: (
    'center' |
    'inherit' |
    'justify' |
    'left' |
    'right'
  ) = 'left'
  children: ReactNode,
  classes?: string
  paragraph?: boolean
  variant: (
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    'h6' |
    'button' |
    'body' |
    'caption' |
    'subtitle'
  )
  size: 'lg' | 'md' | 'sm' | 'xsm' 
  weight?: (
    'light' |
    'regular' |
    'semiBold' |
    'bold' |
    'xbold' |
    'black' |
    'xblack'
  ) = 'regular'
  textShadow?: 'default'
  ellipsis?: boolean
}

