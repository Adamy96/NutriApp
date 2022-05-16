import Link from 'next/link'
import { HomeSvg, StatisticsSvg, TasksSvg, ProfileSvg } from '@assets/svg'
import { Typography } from '@components'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const navData = [
    {
      title: 'Home',
      icon: <HomeSvg />,
      url: '/home'
    },
    {
      title: 'Meals',
      icon: <TasksSvg />,
      url: '/meals'
    },
    {
      title: 'Statistics',
      icon: <StatisticsSvg />,
      url: '/statistics'
    },
    {
      title: 'Placeholder',
      icon: <ProfileSvg />,
      url: '/placeholder'
    }
  ]

  const addActiveClass = (title: string) => {
    const Regex = new RegExp(title, 'gi')
    const isActive = Regex.test(router.pathname)
    return isActive ? styles.active : styles.default
  }

  return (
    <div className={styles.navbar}>
      {navData.map((data, idx) => (
        <Link href={data.url} key={idx}>
          <div key={idx} className={`${styles.navItem} ${addActiveClass(data.title)}`}>
            {data.icon}
            <Typography align='center' variant='caption' weight='semiBold' size='sm'>
              {data.title}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Navbar