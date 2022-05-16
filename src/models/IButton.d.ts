interface IButton {
  borderRadius: 'sm' | 'md' | 'lg'
  children: ReactNode
  classes?: string
  height: 'md' | 'lg'
  onClick?(e: any): any
  variant: 'cta' | 'white' = 'white'
}