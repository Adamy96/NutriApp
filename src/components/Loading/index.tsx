import { TailSpin } from 'react-loader-spinner'
import { useLoading } from '@hooks'
import { Typography } from '@components'
import styles from './styles.module.scss'

const Loading = () => {
  const { loadingState } = useLoading()

  if (!loadingState.apiFoodsLoading) return null
  
  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <TailSpin
          height="60"
          width="60"
          color='#84949f'
          ariaLabel='loading'
        />
        <Typography variant='body' size='md' weight='semiBold' textShadow='default' classes={styles.text}>
          Loading...
        </Typography>
      </div>
      
    </div>
  )
}

export default Loading