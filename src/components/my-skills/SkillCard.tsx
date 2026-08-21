import clsx from 'clsx';
import styles from './SkillCard.module.css';
import React, { useState } from 'react';
import { Skill } from './SkillsData';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={styles.skillCardWrapper}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={clsx(styles.skillCard, {
                    [styles.isFlipped]: isFlipped,
                })}
            >
                {/* Vorderseite */}
                <div className={styles.skillCardFront}>
                    {skill.isSvg ? (
                        (() => {
                            const Logo = skill.logo as React.ComponentType<
                                React.SVGProps<SVGSVGElement>
                            >;

                            return <Logo className={styles.skillImg} />;
                        })()
                    ) : (
                        <img
                            src={skill.logo as string}
                            alt={skill.name}
                            className={styles.skillPng}
                        />
                    )}
                    <p className={styles.skillName}>{skill.name}</p>
                </div>

                {/* Rückseite */}
                <div className={styles.skillCardBack}>
                    <p className={styles.descHead}>{skill.descHead}</p>
                    <ul className={styles.descList}>
                        {skill.descText.map((item, index) => (
                            <li key={index} className={styles.descItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;