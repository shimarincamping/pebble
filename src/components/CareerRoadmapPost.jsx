import React from "react";
import styles from "../styles/CareerRoadmapPost.module.css";
import { Link } from "react-router-dom";
import CareerRoadmapButtons from "./CareerRoadmapButtons";

const CareerRoadmapPost = ({ roadmap }) => {
  return (
    <div className={styles.roadmapPost}>
      <div className={styles.roadmapPost__header}>
        <Link to="/roadmap" className={styles.roadmapPost__backButton}>
          <img src="/img/Back.png" alt="Back" className={styles.roadmapPost__back} />
        </Link>
        <div className={styles.roadmapPost__banner}>
          <img src={roadmap.roadmapBannerImageLink} alt="Banner" className={styles.roadmapPost__bannerImage} />
        </div>
        <div className={styles.roadmapPost__headerContent}>
          <h1 className={styles.roadmapPost__title}>{roadmap.roadmapThreadTitle}</h1>
          <div className={styles.roadmapPost__author}>
            <img src={roadmap.roadmapProfileImageLink} alt={roadmap.author} className={styles.roadmapPost__authorImage} />
            <p>{roadmap.roadmapThreadAuthor}</p>
          </div>
        </div>
      </div>

      <div className={styles.roadmapPost__content}>
        {roadmap.roadmapDescription?.map((desc, index) => (
          <div key={index} className={styles.roadmapPost__description}>
            <h3><strong>{desc.roadmapDescriptionTitle}</strong></h3>
            <p>{desc.content}</p>
          </div>
        ))}

        {roadmap.roadmapSection?.map((section, index) => (
          <div key={index} className={styles.roadmapPost__section}>
            <h3 className={styles.roadmapPost__sectionTitle}>{section.roadmapSectionTitle}</h3>
            <p className={styles.roadmapPost__sectionText}>{section.roadmapSectionDescription}</p>

            {section.roadmapSectionButton?.map((item, itemIndex) => (
              <CareerRoadmapButtons key={itemIndex} item={item} type={section.roadmapSectionType} />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <h2 className={styles.bottomSection__sectionTitle}>Bottom Line</h2>
        <p>By actively participating in these competitions and showcasing your skills and achievements, you can significantly enhance your resume.</p>
        <div className={styles.bottomSection__backButton}>
          <Link to="/careerroadmap">Back to Roadmap</Link>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmapPost;
