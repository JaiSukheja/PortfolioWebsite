import React from 'react'
import styles from './page.module.scss'
import CircularProgressBar from '@/components/circularProgressBar/CircularProgressBar'
import Image from 'next/image'
import skillsImage from '/public/ProgrammingAmico.png'

const skills = [
  {
    skill: "React",
    percent: 90
  },
  {
    skill: "React Native",
    percent: 80
  },
  {
    skill: "Node",
    percent: 85
  },
  {
    skill: "Express",
    percent: 80
  },
  // {
  //   skill: "Java",
  //   percent: 60
  // },
  {
    skill: "Python",
    percent: 70
  },
  {
    skill: "C++",
    percent: 85
  },
  {
    skill: "HTML",
    percent: 80
  },
  {
    skill: "CSS",
    percent: 75
  }
]

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.skill}>
          <div className={styles.heading}>
            My <span className={styles.highlight}>skills</span>
            <hr />
          </div>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <CircularProgressBar key={index} skill={skill.skill} percent={skill.percent} />
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={skillsImage} alt="Home" className={styles.homeImage} />
        </div>
      </div>
    </div>
  )
}

export default Skills