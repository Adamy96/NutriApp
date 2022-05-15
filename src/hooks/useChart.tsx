const useChart = () => {
  const translatedNutrientNames = {
    ENERC_KCAL: 'Kilocalories',
    CHOCDF: 'Carbohydrate',
    FAT: 'Fat',
    FIBTG: 'Fibre',
    PROCNT: 'Protein'
  }

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

  return { parseNutrientsToBarChart, parseDatasetPerFood }
}

export default useChart