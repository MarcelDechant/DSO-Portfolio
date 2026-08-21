import clsx from 'clsx';
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navDiv}>
          <nav className={styles.nav}>
            <a className={clsx(styles.navLink)} href="/#about">About me</a>
            <a className={clsx(styles.navLink)} href="/#skills">My skills</a>
            <a className={clsx(styles.navLink)} href="/#projects">My projects</a>
            <a className={clsx(styles.navLink)} href="/#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
        );
}