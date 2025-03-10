import React, { useState, useEffect } from "react";
import CareerRoadmapPost from "../components/CareerRoadmapPost";
import { useParams } from "react-router-dom"; // To get ID from URL
import styles from "../styles/CareerRoadmap.module.css";

const CareerRoadmapPostContainer = () => {
    const { id } = useParams(); // Get the roadmap ID from URL
    const [roadmap, setRoadmap] = useState(null);
    const token = localStorage.getItem("jwtToken");
    // Fetch roadmap data based on the ID
    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/roadmap/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Roadmap not found");
                }
                const data = await response.json();
                setRoadmap(data);
            } catch (error) {
                console.error("Error fetching roadmap:", error);
                setRoadmap(null);
            }
        };

        fetchRoadmap();
    }, [id]);

    if (!roadmap) {
        return <p>Loading roadmap details...</p>;
    }

    return (
        <div className={styles.roadmapPost__container}>
            <CareerRoadmapPost roadmap={roadmap} />
        </div>
    );
};

export default CareerRoadmapPostContainer;
