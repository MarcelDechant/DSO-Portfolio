import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Header.module.css';

export default function Header() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navDiv}>
          <nav className={styles.nav}>
            <a
              className={clsx(styles.navLink)}
              href={`${siteConfig.baseUrl}#about`}
            >
              About me
            </a>
            <a
              className={clsx(styles.navLink)}
              href={`${siteConfig.baseUrl}#skills`}
            >
              My skills
            </a>
            <a
              className={clsx(styles.navLink)}
              href={`${siteConfig.baseUrl}#projects`}
            >
              My projects
            </a>
            <a
              className={clsx(styles.navLink)}
              href={`${siteConfig.baseUrl}#contact`}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}