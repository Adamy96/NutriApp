import type { AppProps } from 'next/app'
import { Navigation } from '@templates'
import { Loading } from '@components'
import AppContextProvider from '../AppContextProvider'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <Loading />
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </AppContextProvider>
  )
}

export default MyApp
