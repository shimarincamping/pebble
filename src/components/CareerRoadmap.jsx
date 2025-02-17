import styles from '../styles/CareerRoadmap.module.css';

const CareerRoadmap = ({ roadmap, onClick }) => {
    return (
      <div className={styles.roadmaps__card} onClick={onClick}>
        <img src={roadmap.roadmapBannerImageLink} alt={`${roadmap.roadmapThreadTitle} thumbnail`} className={styles.roadmaps__image} />
        <div className={styles.roadmaps__cardContent}>
          <h3 className={styles.roadmaps__cardTitle}>{roadmap.roadmapThreadTitle}</h3>
          <div className={styles.roadmaps__authorContainer}>
            <img src={roadmap.roadmapProfileImageLink} alt={roadmap.roadmapThreadAuthor} className={styles.roadmaps__profileImage} />
            <p className={styles.roadmaps__cardAuthor}>{roadmap.roadmapThreadAuthor}</p>
          </div>
        </div>
      </div>
    );
}

export default CareerRoadmap;
