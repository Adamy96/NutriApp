import type { AppProps } from 'next/app'
import { Navigation } from '@templates'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  )
}

export default MyApp
