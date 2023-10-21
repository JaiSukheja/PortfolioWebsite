import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import contactImage from "/public/contact.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        Let's <span className={styles.highlight}>connect</span>
        <hr />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactForm}>
            <div className={styles.contactFormTop}>
              <div className={styles.inputContainer}>
                <label htmlFor="" className={styles.label}>Your Name</label>
                <input type="text" placeholder="Name" className={styles.input}/>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="" className={styles.label}>Your Email</label>
                <input type="text" placeholder="Email" className={styles.input}/>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="" className={styles.label}>Your Message</label>
              <textarea placeholder="Message" rows={12} className={styles.textarea}></textarea>
            </div>
            <button className={styles.contactButton}><span>Send Message </span><i className='bx bx-send'></i></button>
          </div>
          <div>
            {/* Social Links */}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={contactImage} alt="Home" className={styles.homeImage} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
