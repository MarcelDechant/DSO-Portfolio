import clsx from 'clsx';

import styles from './MySkills.module.css';
import { skillsData } from './SkillsData';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2>My Skills</h2>
        <div className={styles.skillSection}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}