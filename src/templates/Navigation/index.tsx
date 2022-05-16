import React from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '@components'
import styles from './styles.module.scss'

const Navigation = ({ children }: any) => {
  const navigationPages = ['/home', '/meals', '/statistics', '/placeholder']
  const router = useRouter()

  if (!navigationPages.includes(router.pathname)) {
    return children
  }

  return (
    <div className={styles.navigationLayout}>
      {children}
      <Navbar />
    </div>
  )
}

export default Navigation