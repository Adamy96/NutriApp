import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'react-toastify/dist/ReactToastify.css';

import { Navigation } from '@templates'
import { Loading, Modals } from '@components'
import { DEFAULT_FONT_FAMILY, COLOR_DARK } from '@constants'
import AppContextProvider from '../AppContextProvider'
import '@styles/main.scss'

ChartJS.defaults.font = {
  ...ChartJS.defaults.font,
  family: DEFAULT_FONT_FAMILY,
  size: 12,
  weight: '500'
}
ChartJS.defaults.color = COLOR_DARK
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <ToastContainer />
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
