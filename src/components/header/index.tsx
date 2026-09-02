import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Header.module.css';

export default function Header() {
  const { siteConfig } = useDocusaurusContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        styles.header,
        !showHeader && styles.headerHidden
      )}
    >
      <div className={styles.container}>
        <div className={styles.navDiv}>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a
              className={styles.navLink}
              href={`${siteConfig.baseUrl}#about`}
            >
              About me
            </a>

            <a
              className={styles.navLink}
              href={`${siteConfig.baseUrl}#skills`}
            >
              My skills
            </a>

            <a
              className={styles.navLink}
              href={`${siteConfig.baseUrl}#projects`}
            >
              My projects
            </a>

            <a
              className={styles.navLink}
              href={`${siteConfig.baseUrl}#contact`}
            >
              Contact
            </a>
          </nav>

          {/* Burger Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Overlay */}
          <div
            className={clsx(
              styles.mobileMenu,
              menuOpen && styles.mobileMenuOpen
            )}
          >
            {/* Close Button */}
            <button
              className={styles.mobileCloseButton}
              onClick={closeMenu}
              aria-label="Menü schließen"
            >
              <span></span>
              <span></span>
            </button>

            {/* Mobile Navigation */}
            <nav className={styles.mobileNav}>
              <a
                href={`${siteConfig.baseUrl}#about`}
                onClick={closeMenu}
              >
                About me
              </a>

              <a
                href={`${siteConfig.baseUrl}#skills`}
                onClick={closeMenu}
              >
                My skills
              </a>

              <a
                href={`${siteConfig.baseUrl}#projects`}
                onClick={closeMenu}
              >
                My projects
              </a>

              <a
                href={`${siteConfig.baseUrl}#contact`}
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}