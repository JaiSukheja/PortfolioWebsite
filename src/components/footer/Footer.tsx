import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>Designed & Developed by <Link href={"/"} className={styles.link}>Jai Sukheja</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer