import { LoadingProvider, MealsProvider, ModalsProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, MealsProvider, ModalsProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
