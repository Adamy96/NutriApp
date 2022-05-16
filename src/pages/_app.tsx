import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { Navigation } from '@templates'
import { Configs, Loading, Modals } from '@components'
import AppContextProvider from '../AppContextProvider'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ToastContainer />
      <Configs />
      <div style={{ height: '100%',  position: 'relative'}}>
        <Loading />
        <Modals />
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </div>
      
    </AppContextProvider>
  )
}

export default MyApp
