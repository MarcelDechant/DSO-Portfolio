import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link
            to="/#about"
            className={styles.upArrowLink}

          >
            <img
              className={styles.upArrow}
              src={require("../../assets/projectsimgs/upArrow.png").default}
              alt="UP"
            />
          </Link>
          <p>© Marcel Dechant 2026</p>
          <a className={styles.footerLinks} href="./privacy">
            Privacy Police
          </a>
          <a className={styles.footerLinks} href="./imprint">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;