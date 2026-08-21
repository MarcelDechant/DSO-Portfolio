import { useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Hero.module.css';



export default function Hero() {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.greeting}>Hey there, 👋 I am</p>

          <h1 className={styles.name}>Marcel Dechant</h1>

          <p className={styles.role}>DevSecOps Engineer</p>

          <p className={styles.description}>
            I am passionate about securing applications and systems, combining automation, cloud technologies, and best practices to build reliable and safe environments.
            I enjoy analyzing complex problems, finding vulnerabilities, and implementing solutions that make software more resilient.
            Constantly learning and staying up-to-date with the latest security trends drives me to improve every day and deliver value in every project I work on.
          </p>

          <a
            href="#contact"
            className={clsx(styles.aboutLink, isHover && styles.aboutLinkHover)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Contact me
          </a>
        </div>

        <div className={styles.right}>
          <img
            className={styles.profilePic}
            src={useBaseUrl('/img/profilbild.png')}
            alt="Profile picture of Marcel Dechant"
          />
        </div>
      </div>
    </section>
  );
}