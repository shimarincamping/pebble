import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CareerRoadmap from "../components/CareerRoadmap";
import styles from "../styles/CareerRoadmap.module.css";

function CareerRoadmapContainer() {
    const { id } = useParams(); // Get roadmap ID from URL
    const navigate = useNavigate();
    const [roadmapData, setRoadmapData] = useState([]);
    const [roadmap, setRoadmap] = useState(null);
    const token = localStorage.getItem("jwtToken");
    // Fetch data from the backend API
    const fetchRoadmapData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/roadmap`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            setRoadmapData(data);
        } catch (error) {
            console.error("Error fetching roadmaps:", error);
        }
    };

    useEffect(() => {
        fetchRoadmapData();
    }, []);

    useEffect(() => {
        if (id && roadmapData.length > 0) {
            const selectedRoadmap = roadmapData.find(
                (roadmap) => roadmap.docId === id
            );
            setRoadmap(selectedRoadmap || null);
        }
    }, [id, roadmapData]);

    const handleRoadmapClick = (id) => {
        navigate(`/roadmap/${id}`);
    };

    return (
        <div className={styles.roadmaps}>
            <div className={styles.roadmaps__header}>
                <h1>Available Roadmaps</h1>
            </div>
            <div className={styles.roadmaps__roadmapData}>
                {roadmapData.length > 0 ? (
                    roadmapData.map((roadmap) => (
                        <CareerRoadmap
                            key={roadmap.docId}
                            roadmap={roadmap}
                            onClick={() => handleRoadmapClick(roadmap.docId)}
                        />
                    ))
                ) : (
                    <p>Loading roadmaps...</p>
                )}
            </div>
        </div>
    );
}

export default CareerRoadmapContainer;
