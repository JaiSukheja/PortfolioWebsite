import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'


const links = [
  {
    id:1,
    name: '',
    path: '#home'
  },
  {
    id:2,
    name: 'About',
    path: '#about'
  },
  {
    id:3,
    name: 'Experience',
    path: '#experience'
  },
  {
    id:4,
    name: 'Skills',
    path: '#skills'
  },
  {
    id:5,
    name: 'Projects',
    path: '#projects'
  },
  {
    id:6,
    name: 'Certificates',
    path: '#certificates'
  },
  {
    id:7,
    name: 'Contact',
    path: '#contact'
  },
]

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="#home">Exploring...</Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <Link href={link.path} key={link.id} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar