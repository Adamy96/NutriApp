import { LoadingProvider, MealsProvider, ModalsProvider, ThemeProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, MealsProvider, ModalsProvider, ThemeProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
