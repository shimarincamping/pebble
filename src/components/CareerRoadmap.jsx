import styles from '../styles/CareerRoadmap.module.css';

const CareerRoadmap = ({ roadmap, onClick }) => {
    return (
      <div className={styles.roadmaps__card} onClick={onClick}>
        <img src={roadmap.image} alt={`${roadmap.title} thumbnail`} className={styles.roadmaps__image} />
        <div className={styles.roadmaps__cardContent}>
          <h3 className={styles.roadmaps__cardTitle}>{roadmap.title}</h3>
          <div className={styles.roadmaps__authorContainer}>
            <img src={roadmap.profileImage} alt={roadmap.author} className={styles.roadmaps__profileImage} />
            <p className={styles.roadmaps__cardAuthor}>{roadmap.author}</p>
          </div>
        </div>
      </div>
    );
}

export default CareerRoadmap;
