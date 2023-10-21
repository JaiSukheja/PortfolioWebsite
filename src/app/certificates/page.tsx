import CertificatesContainer from '@/components/certificatesContainer/page'
import React from 'react'
import styles from './page.module.scss'

const Certificates = () => {
    const courses = [
    { src: "/Certificate_of_Completion_Data_Structures_and_Algorithms_in_C++.jpg",institute:"Coding Blocks",date:"Sept 2022",skill:"C++ Programming", width: 1080, height: 720 },
    { src: "/HtmlCssUdemy.jpg",institute:"Udemy",date:"Sept 2022",skill:"HTML & CSS", width: 1080, height: 720 },
    { src: "/Certificate_of_Completion_MERN_Stack_Development.jpg",institute:"Coding Blocks",date:"Mar 2023",skill:"Full Stack Development", width: 1080, height: 720 },
    { src: "/Certificate_of_Excellence_Coding_Blocks.jpg",institute:"Coding Blocks",date:"Mar 2023",skill:"Certificate of Excellence", width: 1080, height: 720 },
    { src: "/JavascriptUdemy.jpg",institute:"Udemy",date:"Aug 2023",skill:"Javascript", width: 1080, height: 720 },
    // { src: "/SQLBasic.png",institute:"HackerRank",date:"Aug 2023",skill:"SQL (Skill Test)", width: 1080, height: 720 },
    { src: "/JaiSukhejaIntrotoMachineLearning.png",institute:"Kaggle",date:"Oct 2023",skill:"Machine Learning", width: 1080, height: 720 },
];
const Extra = [
    { src: "/Data_Piracy_Quiz.jpg",institute:"Government of India",date:"2021",skill:"Data Privacy", width: 1080, height: 720 },
    { src: "/Impulse.jpg",institute:"MAIT",date:"May 2022",skill:"TechFest", width: 1080, height: 720 },
    { src: "/Certificate_of_Participation_Data_Analysis.jpg",institute:"JIMS",date:"Jul 2022",skill:"Data Analysis", width: 1080, height: 720 },
    { src: "/Certificate_of_Participation_Rapid_Coding.jpg",institute:"JIMS",date:"Jul 2022",skill:"Competitive Programming", width: 1080, height: 720 },
    { src: "/Webion.jpg",institute:"MAIT",date:"Nov 2022",skill:"Frontend Development", width: 1080, height: 720 },
    { src: "/hackWithMait.jpg",institute:"MAIT",date:"Dec 2022",skill:"Hackathon", width: 1080, height: 720 },


];
  return (
    <div className={styles.certificates}>
      <div className={styles.heading}>
            <span className={styles.highlight}>Certificates</span>
            <hr />
          </div>
        <div className={styles.typeHeading}>
            Courses
        </div>
        <CertificatesContainer photoSet={courses.reverse()} />
        <div className={styles.typeHeading}>
            Extra Curricular Activities
        </div>
        <CertificatesContainer photoSet={Extra.reverse()}/>
    </div>
  )
}

export default Certificates