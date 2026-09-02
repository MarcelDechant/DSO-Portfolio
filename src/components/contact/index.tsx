import React, { useState } from "react";
import styles from "./Contact.module.css";

import MailIcon from "../../assets/projectsimgs/mailIcon.png";
import MailIconHover from "../../assets/projectsimgs/mailHover.png";
import LinkedInIcon from "../../assets/projectsimgs/linkedInIcon.png";
import LinkedInIconHover from "../../assets/projectsimgs/linkedInHover.png";

const Contact: React.FC = () => {
  const [mailHover, setMailHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.left}>
            <h2>Get in Touch</h2>

            <ul className={styles.contactList}>
              <li>
                Feel free to reach out regarding Frontend, Backend or Fullstack Developer opportunities.
              </li>
              <li>
                I am a Fullstack Developer with a strong interest in DevSecOps.
              </li>
              <li>
                Passionate about modern web technologies, automation and continuous learning.
              </li>
              <li>
                Open to remote and hybrid opportunities.
              </li>
            </ul>
          </div>

          <div className={styles.right}>

            <p className={styles.linkHeader}>
              I'm always happy to discuss new opportunities,
              exciting projects or collaborations.
            </p>

            <a
              className={styles.socialLinks}
              href="mailto:marcel.dechant@freenet.de"
              onMouseEnter={() => setMailHover(true)}
              onMouseLeave={() => setMailHover(false)}
            >
              <img
                className={styles.socialIcon}
                src={mailHover ? MailIconHover : MailIcon}
                alt="Email"
              />
              marcel.dechant@freenet.de
            </a>

            <a
              className={styles.socialLinks}
              href="https://www.linkedin.com/in/marcel-dechant-3ba214317/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedInHover(true)}
              onMouseLeave={() => setLinkedInHover(false)}
            >
              <img
                className={styles.socialIcon}
                src={linkedInHover ? LinkedInIconHover : LinkedInIcon}
                alt="LinkedIn"
              />
              <p className={styles.linkText}>LinkedIn Profile</p>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

