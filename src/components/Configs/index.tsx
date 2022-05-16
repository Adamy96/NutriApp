import { useEffect } from 'react'
import Script from 'next/script'
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
import { DEFAULT_FONT_FAMILY, COLOR_DARK, COLOR_WHITE } from '@constants'
import { useTheme } from '@hooks'

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

const Configs = () => {
  const { currentTheme } = useTheme()

  useEffect(() => {
    if (currentTheme === 'contrast') {
      ChartJS.defaults.color = COLOR_WHITE
    } else {
      ChartJS.defaults.color = COLOR_DARK
    }
  }, [currentTheme])
  
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    </>
  )
}

export default Configs