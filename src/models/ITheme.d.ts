interface IThemeState {
  theme: 'default' | 'contrast'
}

interface IThemeItem {
  [key as string]: string
}