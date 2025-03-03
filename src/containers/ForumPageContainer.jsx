import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ForumPageHeader from "../components/ForumPageHeader";
import ForumCreateThreadContainer from "./ForumCreateThreadContainer";
import ForumThreadPreviewCard from "../components/ForumThreadPreviewCard";

export default function ForumPageContainer() {
    const navigate = useNavigate();
    const { threadID } = useParams();
    const [isCreatingThread, setIsCreatingThread] = useState(false);
    const [forumThreadData, setForumThreadData] = useState([]);
    const [forumThread, setForumThread] = useState({});

    // Fetch data from the backend API
    const fetchForumThreadData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum`
            );
            const data = await response.json();
            setForumThreadData(data);
        } catch (error) {
            console.error("Error fetching forum threads:", error);
        }
    };

    useEffect(() => {
        fetchForumThreadData();
    }, []);

    useEffect(() => {
        if (threadID && forumThreadData.length > 0) {
            const selectedForumThread = forumThreadData.find(
                (forumThread) => forumThread.threadID === parseInt(threadID)
            );
            setForumThread(selectedForumThread || null);
        }
    }, [threadID, forumThreadData]);

    const handleCreateThread = () => {
        setIsCreatingThread(true);
    };

    const handleGenerateForum = () => {
        setIsCreatingThread(false);
    };

    const handleViewThread = (threadID) => {
        navigate(`/forum/${threadID}`); // Navigate to thread page
    };

    const toggleLike = async (threadID) => {
        await fetch(
            `${process.env.REACT_APP_API_URL}/forum/${threadID}/likes`,
            {
                method: "PUT",
            }
        );
    };

    return (
        <div>
            {isCreatingThread ? (
                <ForumCreateThreadContainer
                    clickBackButton={handleGenerateForum}
                />
            ) : (
                <>
                    <ForumPageHeader onClick={handleCreateThread} />
                    {forumThreadData.length > 0 ? (
                        forumThreadData.map((forumThread) => (
                            <ForumThreadPreviewCard
                                key={forumThread.threadID}
                                forumThread={forumThread}
                                userData={forumThread.userData}
                                onClick={() =>
                                    handleViewThread(forumThread.threadID)
                                }
                                toggleLike={() =>
                                    toggleLike(forumThread.threadID)
                                }
                            />
                        ))
                    ) : (
                        <p>Loading threads...</p>
                    )}
                </>
            )}
        </div>
    );
}
