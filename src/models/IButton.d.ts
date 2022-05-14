interface IButton {
  borderRadius: 'sm' | 'md' | 'lg'
  children: ReactNode
  classes?: string
  height: 'md' | 'lg'
  onClick?(): any
  variant: 'cta' | 'white' = 'white'
}