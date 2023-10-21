import React from 'react'
import styles from './page.module.scss'

const Exp = [
    {
      title: 'PSPTechHub Services Pvt. Ltd.',
      position: 'Web Developer Intern',
      duration: 'May 2023 - Sept 2023',
      content: [
        "Led the creation of a versatile Cross-Platform Consultancy App with React Native, Firebase, and Node.js.",
        "Designed a comprehensive Static Website for Digital Manufacturing Solutions, using HTML, CSS, and JavaScript.",
        "Built an engaging Portfolio Website using HTML, CSS, and JavaScript for effective content display.",
      ],
      icon: <i className='bx bx-code' ></i>

    },
    {
      title: 'IOSD MAIT',
      position: 'React Native Head',
      duration: 'Aug 2023 - Present',
      content: [
        "Developing the IOSD MAIT Website along with the team.",
        "Mentoring the students in the field of React Native and helping them in their projects.",
        "Organing Workshops, Webinars, Competitions, Hackathons on various topics related to Latest Technologies.",
      ],
      icon: <i className='bx bx-code-alt' ></i>
    },
    {
      title: 'Codechef MAIT',
      position: 'Competitive Programming Head',
      duration: 'May 2023 - Present',
      content: [
        // "Organising Competitive Programming Competitions and Workshops.", 
        "Guiding the students in the field of Competitive Programming.",     
      ],
      icon: <i className='bx bx-code-curly'></i>
    },
    {
      title: 'Looking for More Opportunities',
      position: '',
      duration: '',
      content: [
        "I am looking for more opportunities to showcase my skills and learn new things."
      ],
      icon: <i className='bx bx-search-alt' ></i>
    },
    
  ]

const Experience = () => {
  return (
    <div className={styles.experience}>
        <div className={styles.heading}>
          My <span className={styles.highlight}>Experience</span>
          <hr />
        </div>
        <div className={styles.ExperienceContainer}>
          {Exp.map((item, index) => (
            <div className={styles.Experience} key={index}>
              <div className={styles.ExperienceTop}>
                  <div className={styles.ExperienceIcon}>
                    {item.icon}
                  </div>
                  <div className={styles.ExperienceDetails}>
                    <div className={styles.ExperienceTitle}>
                      {item.title}
                    </div>
                    <div className={styles.ExperiencePosition}>
                      {item.position}
                    </div>
                    <div className={styles.ExperienceDuration}>
                      {item.duration}
                    </div>
                  </div>
              </div>
              <div className={styles.ExperienceContent}>
                {item.content.map((content, index) => (
                  <div className={styles.ExperienceContentItem} key={index}>
                    <i className='bx bxs-label'></i>
                    {content}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Experience