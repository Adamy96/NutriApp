const contrastTokens = {
  colorBlack: '#000000',
  colorDark: '#05172c',
  colorGreyDark: '#84949f',
  colorGrey: '#b7bdc4',
  colorGreyLight: '#e4e6e9',
  colorLight: '#f4f5f5',
  colorWhite: '#ffffff',
  colorGreen: '#86bf3e',
  colorRed: '#fc4b4e',
  colorYellow: '#fec740',
  colorCta: '#fff333',
  colorCtaDark: '#b0a825'
}

const contrastTheme: any = {
  '--toastify-color-progress-light': contrastTokens.colorWhite,
  '--toastify-color-light': contrastTokens.colorBlack,
  '--toastify-text-color-light': contrastTokens.colorWhite,

  '--AddFoodModal-border-color': contrastTokens.colorWhite,
  '--AddFoodModal-background-color': contrastTokens.colorBlack,
  '--AddFoodModal-color': contrastTokens.colorWhite,

  '--Button-cta-background-color': contrastTokens.colorBlack,
  '--Button-cta-border-color': contrastTokens.colorCta,
  '--Button-cta-color': contrastTokens.colorCta,
  '--Button-white-background-color': contrastTokens.colorBlack,
  '--Button-white-border-color': contrastTokens.colorCta,
  '--Button-white-color': contrastTokens.colorCta,

  '--Page-text-color': contrastTokens.colorWhite,
  '--Page-background-color': contrastTokens.colorBlack,

  '--Navbar-border-color': contrastTokens.colorLight,
  '--Navbar-item-color-default': contrastTokens.colorCtaDark,
  '--Navbar-item-color-active': contrastTokens.colorCta,
  '--Navbar-item-border-color-active': contrastTokens.colorWhite,
  '--Navbar-background-color': contrastTokens.colorBlack,

  '--Modal-closeSvg-fill': contrastTokens.colorCta,

  '--Searchbar-input-background-color': contrastTokens.colorBlack,
  '--Searchbar-input-border-color': contrastTokens.colorCta,
  '--Searchbar-input-text-color': contrastTokens.colorWhite,
  '--Searchbar-input-placeholder-color': contrastTokens.colorWhite,

  '--SearchResults-color': contrastTokens.colorWhite,

  '--FoodCard-background-color': contrastTokens.colorBlack,
  '--FoodCard-color': contrastTokens.colorWhite,
  '--FoodCard-border-color': contrastTokens.colorCta,
  '--FoodCard-moreInformation-color': contrastTokens.colorCta
}

export default contrastTheme