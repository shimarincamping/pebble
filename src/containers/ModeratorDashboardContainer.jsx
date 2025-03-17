import React, { useState, useEffect } from "react";
import ModeratorDashboard from "../components/ModeratorDashboard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

const ModeratorDashboardContainer = () => {
    const [flaggedContent, setFlaggedContent] = useState([]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("jwtToken");
    // Fetch flagged content from backend

    // Approve content visibility
    async function approveContent(flaggedId) {
        try {
            await fetch(
                `${process.env.REACT_APP_API_URL}/flags/${flaggedId}/approve`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setFlaggedContent((prev) =>
                prev.filter((item) => item?.id !== flaggedId)
            );
        } catch (err) {
            console.error("Error approving content:", err);
        }
    }

    // Deny content visibility
    async function denyContent(flaggedId) {
        try {
            await fetch(
                `${process.env.REACT_APP_API_URL}/flags/${flaggedId}/deny`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setFlaggedContent((prev) =>
                prev.filter((item) => item?.id !== flaggedId)
            );
        } catch (err) {
            console.error("Error denying content:", err);
        }
    }

    // Fetch flagged content on component mount
    useEffect(() => {
        async function fetchFlaggedContent() {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/flags`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await response.json();
                setFlaggedContent(data.filter(Boolean));
            } catch (err) {
                console.error("Error fetching flagged content:", err);
                setError("Failed to load flagged content.");
            }
        }

        fetchFlaggedContent();
    }, []);
    

    return (
        (flaggedContent) ? (
        <ModeratorDashboard
            flaggedContent={flaggedContent}
            error={error}
            onApprove={approveContent}
            onDeny={denyContent}
        /> ) : (<ComponentLoadingSpinner />)
    );
};

export default ModeratorDashboardContainer;
