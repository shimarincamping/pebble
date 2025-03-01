import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get ID from URL
import ForumThreadDetailsCard from "../components/ForumThreadDetailsCard";
import ForumThreadComments from "../components/ForumThreadComments";
import ForumThreadAddComment from "../components/ForumThreadAddComment";

const ForumThreadContainer = () => {
    const { threadID } = useParams(); // Get the roadmap ID from
    const [forumThread, setForumThread] = useState(null);
    const [showAddComment, setShowAddComment] = useState(false);
    const [hasAppendedUserData, setHasAppendedUserData] = useState(false);
    const [inputText, setInputText] = useState("");
    const [replyTo, setReplyTo] = useState(null);

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
            isFlagged: false,
            userData: {
                userID: 1,
                profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                fullName: "Anoop Singh",
                description: "BSE | Data Science | Finance",
            },
            comments: [
                {
                    commentID: 1,
                    commentDetails: "So real",
                    upvoteScore: 15,
                    downvoteScore: 1,
                    isFlagged: false,
                    userData: {
                        userID: 9,
                        profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                        fullName: "Brendan Ooi",
                        description: "Co-Founder at TalentSprout",
                    },
                },
                {
                    commentID: 2,
                    commentDetails: "Nice!",
                    upvoteScore: 10,
                    downvoteScore: 2,
                    isFlagged: false,
                    userData: {
                        userID: 3,
                        profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                        fullName: "Edmond Yong",
                        description: "Jesus",
                    },
                },
            ],
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
            isFlagged: false,
            userData: {
                userID: 2,
                profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                fullName: "Haarish Nair",
                description: "Co-Founder at TalentSprout",
            },
            comments: [
                {
                    commentID: 1,
                    commentDetails: "So UNREAL",
                    upvoteScore: 15,
                    downvoteScore: 1,
                    isFlagged: false,
                    userData: {
                        userID: 9,
                        profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                        fullName: "Brendan Ooi",
                        description: "Co-Founder at TalentSprout",
                    },
                },
                {
                    commentID: 2,
                    commentDetails: "KYS",
                    upvoteScore: 10,
                    downvoteScore: 2,
                    isFlagged: false,
                    userData: {
                        userID: 3,
                        profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
                        fullName: "Edmond Yong",
                        description: "Jesus",
                    },
                },
            ],
        },
    ];

    useEffect(() => {
        const selectedForumThread = dummyForumThreadData.find(
            (item) => item.threadID === +threadID
        );
        setForumThread(selectedForumThread);
    }, [threadID]);

    const handleReplyComponent = (repliesTo) => {
        setShowAddComment(true);
        setHasAppendedUserData(true);
        setReplyTo(repliesTo);
    };

    const closeReplyComponent = () => {
        setShowAddComment(false);
    };

    const appendIDToReply = (ID, text) => {
        const existingID = inputText.match(/@\d+/);
        existingID
            ? setInputText(inputText.replace(existingID, `@${ID}`))
            : setInputText(`@${ID} ${text}`);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    useEffect(() => {
        if (replyTo) {
            appendIDToReply(replyTo.userID, inputText);
        }
    }, [replyTo]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        console.log(inputText);
    };

    if (!forumThread) return <p>Loading forum details...</p>;

    return (
        <div>
            <ForumThreadDetailsCard
                forumThread={forumThread}
                userData={forumThread.userData}
                onClickReply={() => handleReplyComponent(forumThread.userData)}
            />
            <div>
                {showAddComment ? (
                    <ForumThreadAddComment
                        repliesTo={replyTo.fullName}
                        onCancel={() => closeReplyComponent()}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        inputText={inputText}
                    />
                ) : null}
                {forumThread.comments.map((comment, index) => (
                    <ForumThreadComments
                        key={index}
                        comment={comment}
                        userData={comment.userData}
                        onClickReply={() => {
                            handleReplyComponent(comment.userData);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ForumThreadContainer;
