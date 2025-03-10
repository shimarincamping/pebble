import React, { useState, useEffect } from "react";
import ModeratorDashboard from "../components/ModeratorDashboard";

const ModeratorDashboardContainer = () => {
    const [flaggedContent, setFlaggedContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch flagged content from backend
    async function fetchFlaggedContent() {
        setLoading(true);
        const token = localStorage.getItem("jwtToken");
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
            setFlaggedContent(data);
        } catch (err) {
            console.error("Error fetching flagged content:", err);
            setError("Failed to load flagged content.");
        } finally {
            setLoading(false);
        }
    }

    // Approve content visibility
    async function approveContent(flaggedId) {
        try {
            await fetch(
                `${process.env.REACT_APP_API_URL}/flags/${flaggedId}/approve`,
                {
                    method: "PUT",
                }
            );
            setFlaggedContent((prev) =>
                prev.filter((item) => item.id !== flaggedId)
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
                }
            );
            setFlaggedContent((prev) =>
                prev.filter((item) => item.id !== flaggedId)
            );
        } catch (err) {
            console.error("Error denying content:", err);
        }
    }

    // Fetch flagged content on component mount
    useEffect(() => {
        fetchFlaggedContent();
    }, []);

    return (
        <ModeratorDashboard
            flaggedContent={flaggedContent}
            loading={loading}
            error={error}
            onApprove={approveContent}
            onDeny={denyContent}
        />
    );
};

export default ModeratorDashboardContainer;
