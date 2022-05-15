interface INutrients {
  CHOCDF: number
  ENERC_KCAL: number
  FAT: number
  FIBTG: number
  PROCNT: number
}

interface IFood {
  category: string
  categoryLabel: string
  foodId: string
  image?: string
  label: string
  nutrients: INutrients
  uri: string
}

type HintsType = {
  food: IFood
}

type DataType = {
  hints: HintsType[]
}

interface IResponseFoodAPI {
  data: DataType
}