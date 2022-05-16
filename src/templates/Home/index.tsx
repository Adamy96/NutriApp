import { Button, Typography } from "@components"
import { useTheme } from '@hooks'
import styles from './styles.module.scss'

const Home = () => {
  const { toggleTheme } = useTheme()

  return (
    <div className={styles.home}>
      <Typography variant='h1' weight='bold' size='lg' classes={styles.title}>
        Homepage
      </Typography>

      <Button variant='cta' borderRadius='md' height='lg' classes={styles.ctaBtn} onClick={toggleTheme}>
        <Typography variant='body' size='sm' weight='bold'>
            Toggle contrast theme
          </Typography>
      </Button>
    </div>
  )
}

export default Home