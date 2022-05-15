import { LoadingProvider, MealsPageProvider, ModalsProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, MealsPageProvider, ModalsProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
