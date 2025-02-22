import React from "react";
import styles from "../styles/CareerRoadmapPost.module.css";

const CareerRoadmapButtons = ({ item, type }) => {
    return (
        <a
            href={item.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.roadmap__button}
        >
            <div className={styles.roadmapPost__buttonContent}>
                <div className={styles.roadmapButton__left}>
                    {type === "projects" ? (
                        <div className={styles.roadmapButton__leftContent}>
                            <img
                                src={item.buttonImage}
                                alt={item.buttonTitle}
                                className={styles.roadmapButton__image}
                            />
                            <div className={styles.roadmapButton__besideImage}>
                                <div className={styles.roadmapButton__top}>
                                    <strong>{item.buttonTitle}</strong>
                                    <div
                                        className={
                                            styles.roadmapButton__difficulty
                                        }
                                    >
                                        <strong>Difficulty:</strong>{" "}
                                        <p>{item.buttonDifficulty}</p>
                                    </div>
                                    <p
                                        className={
                                            styles.roadmapButton__duration
                                        }
                                    >
                                        {item.buttonDuration}
                                    </p>
                                </div>
                                <div className={styles.roadmapButton__bottom}>
                                    <p>{item.buttonDescription}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <img
                                src={item.buttonImage}
                                alt={item.buttonTitle}
                                className={styles.roadmapButton__image}
                            />
                            <div className={styles.roadmapButton__text}>
                                <strong>{item.buttonTitle}</strong>
                                <p>{item.buttonAuthor}</p>
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
