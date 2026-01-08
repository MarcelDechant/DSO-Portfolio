import clsx from 'clsx';

import React, { useState } from "react";
import styles from "./MyProjects.module.css";
import Link from "@docusaurus/Link";
import { projects, Project } from "./ProjectsData";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0] ?? null
  );

  if (!selectedProject) {
    return null;
  }

  return (
    <section id="projects" className={styles.myProjects}>
      <div className={styles.container}>
        <h2>My project highlights</h2>

        <div className={styles.wrapper}>
          {/* LEFT: Project list */}
          <div className={styles.projectList}>
            {projects.map((project) => (
              <button
                key={project.id}
                className={`${styles.projectButton} ${
                  selectedProject.id === project.id ? styles.active : ""
                }`}
                onClick={() => setSelectedProject(project)}
                type="button"
              >
                <span className={styles.projectId}>{project.id}.</span>
                <span className={styles.projectTitle}>{project.title}</span>
              </button>
            ))}

            <Link to="/docs/projects/overview" className={styles.projectButton}>
              <span className={styles.moreButton}>See more projects</span>
            </Link>
          </div>

          {/* RIGHT: Project details */}
          <div className={styles.projectDetail}>
            <div className={styles.detailsTop}>
              <h3 className={styles.h3}>{selectedProject.title}</h3>

              {selectedProject.icons && (
                <div className={styles.iconsWrapper}>
                  {selectedProject.icons.map((icon, index) => (
                    <div key={index} className={styles.iconBox}>
                      {icon.type === "svg" ? (
                        <icon.icon className={styles.iconSvg} />
                      ) : (
                        <img
                          src={icon.icon}
                          alt={icon.title}
                          className={styles.iconPng}
                        />
                      )}
                      <span className={styles.iconTitle}>{icon.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.detailsBottom}>
              {selectedProject.img && (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className={styles.projectImg}
                />
              )}

              <div className={styles.detailText}>
                <p className={styles.description}>
                  {selectedProject.description}
                </p>

                <div className={styles.projectLinks}>
                  <Link
                    to={selectedProject.doc}
                    className={styles.projectDoc}
                  >
                    Documentation
                  </Link>

                  <a
                    href={selectedProject.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectGit}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;