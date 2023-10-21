"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { Cursor } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'
import homeImage from "/public/ImagesAmico.png"
import Image from 'next/image'

const Home = () => {


  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.title}> Hi, I`&apos;`m</div>
        <div className={styles.mainTitle}>
          Jai Sukheja
        </div>
        <div className={styles.subTitle}>
          <Typewriter
            words={['Aspiring Software Engineer', 'Full Stack Developer', 'Passionate Programmer']}
            loop={0}
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
          <Cursor />
        </div>
        <div className={styles.tagline}>
          I`&apos;`m a dedicated learner aspiring to leverage my
          skills in technology for a fulfilling career. With a
          passion for growth, I
          aim to contribute meaningfully to the tech
          industry.
        </div>
        <div className={styles.socialLinks}>
          <Link href="/" className={styles.socialLink}>
            <i className='bx bxl-github bx-tada-hover'></i>
          </Link>
          <Link href="/" className={styles.socialLink}>
            <i className='bx bxl-linkedin-square bx-tada-hover'></i>
          </Link>
          <Link href="/" className={styles.socialLink}>
            <i className='bx bx-envelope bx-tada-hover'></i>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={homeImage} alt="Home" className={styles.homeImage} />
      </div>
    </div>
  )
}

export default Home