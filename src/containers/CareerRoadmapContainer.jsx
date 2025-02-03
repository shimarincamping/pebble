import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CareerRoadmap from "../components/CareerRoadmap";
import styles from "../styles/CareerRoadmap.module.css";

function CareerRoadmapContainer() {
  const { id } = useParams(); // Get roadmap ID from URL
  const navigate = useNavigate();
  
  // Dummy data for the roadmaps
  const dummyRoadmapData = [
    { id: 1, title: "Become a mobile application developer", author: "Dr HemaLatha Ramalingam", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" },
    { id: 2, title: "Become a platform engineer", author: "Alex Hormozi", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" },
    { id: 3, title: "Become a web developer", author: "Nikola Tesla", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" },
    { id: 4, title: "Become a machine learning engineer", author: "Andrej Karpathy", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" },
    { id: 5, title: "Become a data analyst", author: "Dr Abdul Hadi", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" },
    { id: 6, title: "Become a UI/UX designer", author: "Dr HemaLatha Ramalingam", profileImage: "https://i.imgur.com/qPzFvF4.jpeg", image: "https://i.imgur.com/qPzFvF4.jpeg" }
  ];

  const [roadmapData, setRoadmapData] = useState([]);
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a server with a delay
    setTimeout(() => {
      setRoadmapData(dummyRoadmapData);
    }, 2000);
  }, []);

  useEffect(() => {
    if (id && roadmapData.length > 0) {
      const selectedRoadmap = roadmapData.find((roadmap) => roadmap.id === parseInt(id));
      setRoadmap(selectedRoadmap || null);
    }
  }, [id, roadmapData]);

  const handleRoadmapClick = (id) => {
    navigate(`/roadmap/${id}`); // Navigate to details page with post ID
  };

  return (
    <div className={styles.roadmaps}>
      <div className={styles.roadmaps__header}>
        <h1>Available Roadmaps</h1>
      </div>
      <div className={styles.roadmaps__roadmapData}>
        {roadmapData.length > 0 ? (
          roadmapData.map((roadmap) => (
            <CareerRoadmap key={roadmap.id} roadmap={roadmap} onClick={() => handleRoadmapClick(roadmap.id)} />
          ))
        ) : (
          <p>Loading roadmaps...</p>
        )}
      </div>
    </div>
  );
}

export default CareerRoadmapContainer;
