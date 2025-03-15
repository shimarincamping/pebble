import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CareerRoadmapPost from "../components/CareerRoadmapPost";
import CreateThread from "./RoadmapEditContainer";
import { useParams } from "react-router-dom";
import { useAuth } from "../containers/AuthProvider";
import styles from "../styles/CareerRoadmap.module.css";

const CareerRoadmapPostContainer = () => {
    const { id } = useParams();
    const [roadmap, setRoadmap] = useState(null);
    const [isEditOpen, setIsEditOpen] = useState(false); // New state for popup
    const token = localStorage.getItem("jwtToken");
    const { user } = useAuth();
    const navigate = useNavigate();

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
                    alert("Roadmap not found!");
                    navigate("/roadmap");
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
    }, [id, token]);

    const isAuthor = roadmap && roadmap.authorId === user;

    // Open edit modal
    const handleEdit = () => {
        setIsEditOpen(true);
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this roadmap?"))
            return;

        try {
            const token = localStorage.getItem("jwtToken"); // Ensure token is included
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/roadmap/${id}/deleteRoadmap`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Add Authorization header
                    },
                }
            );

            if (response.ok) {
                alert("Roadmap deleted successfully.");
                window.location.href = "/roadmap";
            } else {
                alert("Failed to delete roadmap.");
            }
        } catch (error) {
            console.error("Error deleting roadmap:", error);
        }
    };

    if (!roadmap) {
        return <p>Loading roadmap details...</p>;
    }

    return (
        <div className={styles.roadmapPost__container}>
            <CareerRoadmapPost
                roadmap={roadmap}
                isAuthor={isAuthor}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            {/* Edit Popup - Uses the CreateThread component */}
            {isEditOpen && (
                <div className={styles.editModal}>
                    <div className={styles.editModal__content}>
                        \{" "}
                        <CreateThread
                            editMode={true}
                            roadmap={roadmap}
                            clickBackButton={() => setIsEditOpen(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareerRoadmapPostContainer;
