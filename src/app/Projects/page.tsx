import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import projectImage from '/public/project.png'
import instagram from '/public/instagram.png'
import netflix from '/public/netflix.png'
import wordle from '/public/wordle.jpg'
import todo from '/public/todo.jpg'
import Link from 'next/link'


const projects = [
  {
    id:1,
    title: 'Connectify',
    description: 'A Realtime Chat Application where users can create account and chat with each other',
    techstack: [<i className='bx bxl-react' ></i>, <i className='bx bxl-nodejs' ></i>, <i className='bx bxl-mongodb' ></i>, <i className='bx bxl-javascript'></i>,<i className='bx bxl-sass' ></i>],
    image: projectImage,
    github: "https://github.com/JaiSukheja/Connectify-App",
    live: ""
  },
  {
    id:3,
    title: 'Instagram Clone',
    description: 'A social media platform where users can create account, post pictures, like and comment on other posts',
    techstack: [<i className='bx bxl-react' ></i>, <i className='bx bxl-nodejs' ></i>, <i className='bx bxl-mongodb' ></i>, <i className='bx bxl-css3' ></i>],
    image: instagram,
    github: "https://github.com/JaiSukheja/instagram-clone",
    live: ""
  },
  {
    id:4,
    title: 'TODO List',
    description: 'A Web-App where users can add, delete and update their tasks',
    techstack: [<i className='bx bxl-react' ></i>, <i className='bx bxl-tailwind-css' ></i>],
    image: todo,
    github: "https://github.com/JaiSukheja/TodoList",
    live: ""
  },
  {
    id:5,
    title: 'Wordle Game',
    description: 'A Word Game where you have to guess the word by looking at the hints provided along with every guess',
    techstack: [<i className='bx bxl-html5' ></i>, <i className='bx bxl-css3' ></i>, <i className='bx bxl-javascript' ></i>],
    image: wordle,
    github: "https://github.com/JaiSukheja/Mini-Games",
    live: "",
  },
  {
    id:6,
    title: 'Netflix Landing Page',
    description: 'A Responsive Landing Page of Netflix ',
    techstack: [<i className='bx bxl-html5' ></i>, <i className='bx bxl-css3' ></i>, <i className='bx bxl-javascript' ></i>],
    image: netflix,
    github: "https://github.com/JaiSukheja/Netflix-Landing-Page",
    live: ""
  },
  
]

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.heading}>
        My <span className={styles.highlight}>Projects</span>
        <hr />
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div className={styles.project} key={project.id}>
            <div className={styles.imageContainer}>
              <Image src={project.image} alt="Project 1" width={300} height={300} />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectTitle}>
                <span className={styles.highlight}>{project.title}</span>
              </div>
              <div className={styles.projectDescription}>
                {project.description}
              </div>
              <div className={styles.Techstack}>
                <span className={styles.highlight}>
                  Techstack:
                  {project.techstack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                  </span>
              </div>
              <div className={styles.projectLinks}>
                <Link href={project.github}passHref className={styles.link}>
                  <i className='bx bx-code-alt'></i>
                </Link>
                {project?.live &&<Link href={project.live}passHref className={styles.link}>
                  <i className='bx bx-rss' ></i>
                </Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects