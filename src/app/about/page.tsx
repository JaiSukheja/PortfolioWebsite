// "use client"
import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import CircularProgressBar from '@/components/circularProgressBar/CircularProgressBar'
import Jai from '/public/Jai.jpeg'



const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.heading}>
          Learn More <span className={styles.highlight}>about me</span>
          <hr />
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src={Jai} alt="Picture of the author"
              width={500}
              height={500}
              className={styles.Image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>
                I am a Web Developer with a passion for building things. I have a strong interest in web development and have experience working with React, ReactNative, Express, Node, and MongoDB. I also have experience with Java, Python, and C++.
              </p>
              <div className={styles.details}>
                <div className={styles.detail}>
                <i className='bx bxs-label'></i>
                  <b>
                    Birth Date: 
                  </b>
                  <span className={styles.highlight}>
                    22<sup>nd</sup> December 2002
                  </span>
                </div>
                <div className={styles.detail}>
                <i className='bx bxs-label'></i>
                  <b>
                    City: 
                  </b>
                  <span className={styles.highlight}>
                    New Delhi, Delhi
                  </span>
                </div>
                <div className={styles.detail}>
                <i className='bx bxs-label'></i>
                  <b>
                    Email: 
                  </b>
                  <span className={styles.highlight}>
                    jaisukheja02@gmail.com
                  </span>
                </div>
                <div className={styles.detail}>
                <i className='bx bxs-label'></i>
                  <b>
                    Degree: 
                  </b>
                  <span className={styles.highlight}>
                    B.Tech
                  </span>
                </div>
              </div>
              <p>
                I am currently a Computer Science Engineering student at Maharaja Agrasen Institute of Technology. Additionally, I serve as the React Native Head at IOSD-MAIT and as the Competitive Programming Head at the CODECHEF Chapter MAIT. 
              </p>
              <p>
                In my free time, I enjoy playing video games, watching movies, and playing sports. I also enjoy learning new things and am currently learning about Machine learning and Data science.
              </p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default About