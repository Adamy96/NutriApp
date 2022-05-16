const useChart = () => {
  const translatedNutrientNames = {
    ENERC_KCAL: 'Kilocalories',
    CHOCDF: 'Carbohydrate',
    FAT: 'Fat',
    FIBTG: 'Fibre',
    PROCNT: 'Protein'
  }

  const possibleColors = [
    '#01BEFE',
    '#FFDD00',
    '#FF7D00',
    '#FF006D',
    '#ADFF02',
    '#8F00FF'
  ]

  const parseNutrientsToBarChart = (nutrients: INutrients) => {
    return {
      labels: (Object.keys(nutrients) as Array<keyof typeof translatedNutrientNames>)
        .map(tag => translatedNutrientNames[tag]).slice(1),
      data: Object.values(nutrients).slice(1),
      kilocalories: nutrients.ENERC_KCAL,
      datasetLabel: 'Grams',
      title: 'Nutritional information',
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#cc65fe',
        '#ffce56'
      ]
    }
  }

  const parseCaloriesPerAddedFood = (addedFoods: IAddedFood[]) => {
    let labels: string[] = []
    let data: number[] = []
    let backgroundColor: string[] = []

    addedFoods.forEach((addedFood, idx) => {
      labels.push(addedFood.label)
      data.push(addedFood.quantity * addedFood.nutrients.ENERC_KCAL / 100)
      backgroundColor.push(possibleColors[idx % 6])
    })
    
    return {
      labels,
      data,
      backgroundColor
    }
  }

  const parseDatasetPerFood = (nutrients: INutrients[]) => {
    return nutrients.map(nutrient => ({
      labels: (Object.keys(nutrient) as Array<keyof typeof translatedNutrientNames>)
        .map(tag => translatedNutrientNames[tag]).slice(1),
      data: Object.values(nutrient).slice(1),
      kilocalories: nutrient.ENERC_KCAL,
      datasetLabel: 'Grams',
      title: 'Nutritional information',
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#cc65fe',
        '#ffce56'
      ]
    }))
  }

  return { parseNutrientsToBarChart, parseCaloriesPerAddedFood, parseDatasetPerFood }
}

export default useChart