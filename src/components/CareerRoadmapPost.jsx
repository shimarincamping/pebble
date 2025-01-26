import React from "react";
import styles from "../styles/CareerRoadmapPost.module.css";
import { Link } from "react-router-dom";

const CareerRoadmapPost = ({ roadmap }) => {
  console.log("Roadmap Data:", roadmap); // Debugging logs
  console.log("Sections:", roadmap.sections);
  console.log("Projects:", roadmap.projects);

  return (
    <div className={styles.roadmapPost}>
      <div className={styles.roadmapPost__header}>
        <div className={styles.roadmapPost__banner}>
          <img 
            src={roadmap.bannerImage} 
            alt="Banner" 
            className={styles.roadmapPost__bannerImage} 
          />
        </div>
        <div className={styles.roadmapPost__headerContent}>
          <h1 className={styles.roadmapPost__title}>{roadmap.title}</h1>
          <div className={styles.roadmapPost__headerInfo}>
            <div className={styles.roadmapPost__author}>
              <img src={roadmap.profileImage} alt={roadmap.author} className={styles.roadmapPost__authorImage} />
              <p>{roadmap.author}</p>
            </div>
            <button className={styles.roadmapPost__button}>Recommended Paths</button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.roadmapPost__content}>
        {/* Render Description */}
        {roadmap.description?.length > 0 && (
          <div className={styles.roadmapPost__description}>
            {roadmap.description.map((desc, index) => (
              <div key={`desc-${index}`} className={styles.roadmapPost__descriptionItem}>
                <h3><strong>{desc.title}</strong></h3><br />
                <p>{desc.content}</p><br />
              </div>
            ))}
          </div>
        )}

        {/* Render Sections */}
        {roadmap.sections?.length > 0 && (
          <div className={styles.roadmapPost__sections}>
            {roadmap.sections.map((section, index) => (
              <div key={`section-${index}`} className={styles.roadmapPost__section}>
                <h3 className={styles.roadmapPost__sectionTitle}>{section.title}</h3><br />
                <p>{section.text}</p><br />

                {section.items?.length > 0 && section.items.map((item, itemIndex) => (
                  <a
                    key={`item-${index}-${itemIndex}`}
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.roadmap__button}
                  >
                    <div className={styles.roadmapPost__buttonContent}>
                      <div className={styles.roadmapButton__left}>
                        <img
                          src={item.image}
                          alt={item.text}
                          className={styles.roadmapButton__image}
                        />
                        <div className={styles.roadmapButton__text}>
                          <strong>{item.text}</strong>
                          <p>{item.author}</p>
                        </div>
                      </div>
                      <div className={styles.roadmapButton__right}>
                        <div className={styles.roadmapButton__icon}>🔗</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Render Projects */}
        {roadmap.projects?.length > 0 && (
          <div className={styles.roadmapPost__sections}>
            {roadmap.projects.map((project, index) => (
              <div key={`project-${index}`} className={styles.roadmapPost__section}>
                <h3 className={styles.roadmapPost__sectionTitle}>{project.title}</h3><br />
                <p>{project.text}</p><br />
                {project.buttons?.length > 0 && project.buttons.map((button, buttonIndex) => (
                  <a
                    key={`button-${index}-${buttonIndex}`}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.roadmap__button}
                  >
                    <div className={styles.roadmapPost__buttonContent}>
                      <div className={styles.roadmapButton__left}>
                        <div className={styles.roadmapButton__leftContent}>
                          <img
                            src={button.image}
                            alt={button.buttonText}
                            className={styles.roadmapButton__image}
                          />
                          <div className={styles.roadmapButton__besideImage}>
                            <div className={styles.roadmapButton__top}>
                              <strong>{button.name}</strong>
                              <div className={styles.roadmapButton__difficulty}>
                                <strong>Difficulty:</strong><p>{button.difficulty}</p>
                              </div>
                              <p className={styles.roadmapButton__duration}>{button.duration}</p>
                            </div>
                            <div className={styles.roadmapButton__bottom}>
                              <p>{button.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.roadmapButton__right}>
                        <div className={styles.roadmapButton__icon}>🔗</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h2>Bottom Line</h2><br />
        <p>By actively participating in these competitions and showcasing your skills and achievements, you can significantly enhance your resume and increase your chances of landing a job in the competitive machine learning industry.</p>
        <button className={styles.bottomSection__backButton}>
          <Link to="/careerroadmap">Back to Roadmap</Link>
        </button>
      </div>
    </div>
  );
};

export default CareerRoadmapPost;
