
import { useState, useRef } from 'react';
import clsx from 'clsx';

import styles from './MySkills.module.css';
import { skillsData } from './SkillsData';
import SkillCard from './SkillCard';

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const skillGroups = [
    skillsData.slice(0, 3),
    skillsData.slice(3, 6),
    skillsData.slice(6, 9),
  ];

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) < 50) {
      touchStartX.current = null;
      return;
    }

    if (difference > 0 && currentPage < skillGroups.length - 1) {
      setCurrentPage(currentPage + 1);
    }

    if (difference < 0 && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }

    touchStartX.current = null;
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        <h2>My Skills</h2>

        {/* Desktop / Tablet */}
        <div className={styles.skillSection}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className={styles.mobileCarousel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.mobileSkillGroup}>
            {skillGroups[currentPage].map((skill, index) => (
              <div className={styles.mobileSkill} key={index}>

                <div className={styles.mobileSkillInfo}>
                  {skill.isSvg ? (
                    (() => {
                      const Logo = skill.logo as React.ComponentType<
                        React.SVGProps<SVGSVGElement>
                      >;

                      return <Logo className={styles.mobileSkillImg} />;
                    })()
                  ) : (
                    <img
                      src={skill.logo as string}
                      alt={skill.name}
                      className={styles.mobileSkillImg}
                    />
                  )}

                  <span className={styles.mobileSkillName}>
                    {skill.name}
                  </span>
                </div>

                <ul className={styles.mobileSkillDescription}>
                  {skill.descText.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* Page indicator */}
          <div className={styles.pageIndicator}>
            {skillGroups.map((_, index) => (
              <button
                key={index}
                type="button"
                className={clsx(styles.pageDot, {
                  [styles.activePageDot]: currentPage === index,
                })}
                onClick={() => setCurrentPage(index)}
                aria-label={`Show skill group ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

