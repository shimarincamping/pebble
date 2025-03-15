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

    const token = localStorage.getItem("jwtToken");

    // Fetch data from the backend API
    const fetchForumThreadData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
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
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/likes`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.ok) {
                fetchForumThreadData();
            } else {
                alert("User cannot like their own thread!");
            }
        } catch (error) {
            console.error("Error liking thread:", error);
        }
    };

    const toggleThreadFlag = async (threadID, forumThread) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/flags`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        text: forumThread.threadDescription,
                        postType: "thread",
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.ok) {
                alert("Thread successfully flagged.");
            } else {
                alert("Error while flagging thread!");
            }
        } catch (error) {
            console.error("Error while flagging thread:", error);
        }
    };

    return (
        <div>
            {isCreatingThread ? (
                <ForumCreateThreadContainer
                    clickBackButton={handleGenerateForum}
                    fetchForumData={fetchForumThreadData}
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
                                toggleThreadFlag={() =>
                                    toggleThreadFlag(
                                        forumThread.threadID,
                                        forumThread
                                    )
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
