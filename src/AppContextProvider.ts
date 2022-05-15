import { LoadingProvider, MealsPageProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, MealsPageProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
