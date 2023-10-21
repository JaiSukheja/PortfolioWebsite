import styles from './page.module.css'
import Certificates from "./certificates/page";
import About from "./about/page";
import Home from "./home/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Projects from './Projects/page';
import Experience from './experience/page';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.singleSection} id="home">
        <Home />
      </div>
      <div className={styles.singleSection} id="about">
        <About />
      </div>
      <div className={styles.singleSection} id="experience">
        <Experience />
      </div>
      <div className={styles.singleSection} id="skills">
        <Skills/>
      </div>
      <div className={styles.singleSection} id="projects">
        <Projects/>
      </div>
      <div className={styles.singleSection} id="certificates">
        <Certificates/>
      </div>
      <div className={styles.singleSection} id="contact">
        <Contact/>
      </div>
    </div>
  )
}
