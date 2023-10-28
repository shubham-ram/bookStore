import Navbar from '@/packages/common/Navbar'
import React from 'react'
import styles from './styles.module.css'

function Layout({children}) {
  return (
    <div>
        <Navbar/>

        <div className={styles.main_body}>
            {children}
        </div>
    </div>
  )
}

export default Layout