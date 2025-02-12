import React from "react";
import styles from "../styles/CareerRoadmapPost.module.css";

const CareerRoadmapButtons = ({ item, type }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.roadmap__button}
    >
      <div className={styles.roadmapPost__buttonContent}>
        <div className={styles.roadmapButton__left}>
          {type === "projects" ? (
            <div className={styles.roadmapButton__leftContent}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.roadmapButton__image}
              />
              <div className={styles.roadmapButton__besideImage}>
                <div className={styles.roadmapButton__top}>
                  <strong>{item.name}</strong>
                  <div className={styles.roadmapButton__difficulty}>
                    <strong>Difficulty:</strong> <p>{item.difficulty}</p>
                  </div>
                  <p className={styles.roadmapButton__duration}>{item.duration}</p>
                </div>
                <div className={styles.roadmapButton__bottom}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <img
                src={item.image}
                alt={item.text}
                className={styles.roadmapButton__image}
              />
              <div className={styles.roadmapButton__text}>
                <strong>{item.text}</strong>
                <p>{item.author}</p>
              </div>
            </>
          )}
        </div>
        <div className={styles.roadmapButton__right}>
          <div className={styles.roadmapButton__icon}>
            <img
              src="/icons/link.png"
              alt="link"
              className={styles.roadmapButton__linkIcon}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default CareerRoadmapButtons;
