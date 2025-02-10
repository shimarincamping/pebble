import React from "react";
import styles from "../styles/CareerRoadmapPost.module.css";
import { Link } from "react-router-dom";
import CareerRoadmapButtons from "./CareerRoadmapButtons";

const CareerRoadmapPost = ({ roadmap }) => {
  return (
    <div className={styles.roadmapPost}>
      <div className={styles.roadmapPost__header}>
        <Link to="/careerroadmap" className={styles.roadmapPost__backButton}>
          <img src="/img/Back.png" alt="Back" className={styles.roadmapPost__back} />
        </Link>
        <div className={styles.roadmapPost__banner}>
          <img src={roadmap.bannerImage} alt="Banner" className={styles.roadmapPost__bannerImage} />
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

      <div className={styles.roadmapPost__content}>
        {roadmap.description?.map((desc, index) => (
          <div key={index} className={styles.roadmapPost__description}>
            <h3><strong>{desc.title}</strong></h3>
            <p>{desc.content}</p>
          </div>
        ))}

        {roadmap.sections?.map((section, index) => (
          <div key={index} className={styles.roadmapPost__section}>
            <h3 className={styles.roadmapPost__sectionTitle}>{section.title}</h3>
            <p className={styles.roadmapPost__sectionText}>{section.text}</p>

            {section.buttons?.map((item, itemIndex) => (
              <CareerRoadmapButtons key={itemIndex} item={item} type={section.type} />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <h2 className={styles.bottomSection__sectionTitle}>Bottom Line</h2>
        <p>By actively participating in these competitions and showcasing your skills and achievements, you can significantly enhance your resume.</p>
        <button className={styles.bottomSection__backButton}>
          <Link to="/careerroadmap">Back to Roadmap</Link>
        </button>
      </div>
    </div>
  );
};

export default CareerRoadmapPost;
