import Link from 'next/link'
import { Button, Typography } from '@components'
import styles from './styles.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <Typography variant='h1' size='lg' textShadow='default'>
          Welcome to my healthy app
        </Typography>
        
        <Typography variant='body' size='sm' weight='semiBold' textShadow='default' classes={styles.description}>
          Here you will be able to see food nutrient information
        </Typography>

        <Button borderRadius='md' height='lg' variant='cta'>
          <Link href='/profile'>
            <a>
              <Typography variant='body' size='sm' weight='bold'>
                Sign up with email
              </Typography>
            </a>
          </Link>
        </Button>

        <Button borderRadius='md' height='lg' variant='white' classes={styles.appleBtn}>
          <Link href='/profile'>
            <a>
              <Typography variant='body' size='sm' weight='bold'>
                Continue with Apple
              </Typography>
            </a>
          </Link>
        </Button>

        <Link href='/profile'>
          <a>
            <Typography align='center' variant='body' size='sm' weight='semiBold' textShadow='default'>
              Already have an account? Log in
            </Typography>
          </a>
        </Link>
      </div>
    </div>
  )

}

export default Login