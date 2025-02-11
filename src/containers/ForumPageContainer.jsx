import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ForumPageHeader from "../components/ForumPageHeader";
import ForumCreateThreadContainer from "./ForumCreateThreadContainer";
import ForumThreadDetailsCard from "../components/ForumThreadDetailsCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import ForumThreadPreviewCard from "../components/ForumThreadPreviewCard";

export default function ForumPageContainer() {
    const navigate = useNavigate();
    const { threadID } = useParams();
    const dummyForumThreadData = [
        {
            threadID: 1,
            threadTitle:
                "GongGong.AI a revolutionary new way for the older generation to interact with technology!",
            threadDateTime: "2021-01-01 12:00:00",
            threadType: "Feedback Thread",
            threadDescription:
                "I would love to receive some feedback on my newly created project that was made during the AI Nusantara GenAI workshop! Was wondering if the implementation of Gemini 1.5 Flash was the best choice for this use case. I’m also working on my conciseness and readability, so any additional feedback on that is appreciate. Thanks to anyone that takes the time to review this!",
            threadScore: 38,
            commentCount: 15,
            shareCount: 128,
            isFlagged: false,
            userData: {
                userID: 1,
                profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                fullName: "Anoop Singh",
                description: "BSE | Data Science | Finance",
            },
        },
        {
            threadID: 2,
            threadTitle:
                "Multi-model approaches to sentiment analysis with GenAI",
            threadDateTime: "2021-01-02 12:00:00",
            threadType: "Discussion Thread",
            threadDescription:
                "Hoping to one day replace goodreads :). Tried to include some GenAI features, might not have the best token efficiency. Any comments or feedback about the overall architecture or tech stack used would also be valuable Overall, I’m seeking feedback on implementation and features. Thanks very much for your time!",
            threadScore: 55,
            commentCount: 18,
            shareCount: 560,
            isFlagged: false,
            userData: {
                userID: 2,
                profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                fullName: "Haarish Nair",
                description: "Co-Founder at TalentSprout",
            },
        },
    ];

    const [isCreatingThread, setIsCreatingThread] = useState(false);
    const [forumThreadData, setForumThreadData] = useState([]);
    const [forumThread, setForumThread] = useState({});

    const handleCreateThread = () => {
        setIsCreatingThread(true);
    };

    const handleGenerateForum = () => {
        setIsCreatingThread(false);
    };

    useEffect(() => {
        const fetchData = setInterval(() => {
            setForumThreadData(dummyForumThreadData);
        }, 5000);

        return () => clearInterval(fetchData);
    }, []);

    useEffect(() => {
        if (threadID && forumThreadData.length > 0) {
            const selectedForumThread = forumThreadData.find(
                (forumThread) => forumThread.threadID === parseInt(threadID)
            );
            setForumThread(selectedForumThread || null);
        }
    }, [threadID, forumThreadData]);

    const handleViewThread = (threadID) => {
        navigate(`/forum/${threadID}`); // Navigate to thread page
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
