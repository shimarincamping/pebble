import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get ID from URL
import ForumThreadDetailsCard from "../components/ForumThreadDetailsCard";
import ForumThreadComments from "../components/ForumThreadComments";
import ForumThreadAddComment from "../components/ForumThreadAddComment";

const ForumThreadContainer = () => {
    const { threadID } = useParams(); // Get the roadmap ID from
    const [forumThread, setForumThread] = useState(null);
    const [showAddComment, setShowAddComment] = useState(false);
    const [inputText, setInputText] = useState(" ");
    const [commentDetails, setCommentDetails] = useState(null);
    const [replyTo, setReplyTo] = useState(null);
    // const [hasUpvoted, setHasUpvoted] = useState(null);

    // Fetch forum data based on the ID
    useEffect(() => {
        const fetchForumThread = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/forum/${threadID}`
                );
                if (!response.ok) {
                    throw new Error("Forum thread not found");
                }
                const data = await response.json();
                setForumThread(data);
            } catch (error) {
                console.error("Error fetching forum thread:", error);
                setForumThread(null);
            }
        };

        fetchForumThread();
    }, [threadID]);

    useEffect(() => {
        if (replyTo) {
            appendIDToReply(replyTo.fullName, inputText);
        }
    }, [replyTo]);

    if (!forumThread) {
        return <p>Loading roadmap details...</p>;
    }

    const handleReplyComponent = (repliesTo) => {
        // when first clicking on reply button
        setShowAddComment(true);
        setReplyTo(repliesTo); // replyTo is the person you are replying to's data
    };

    const closeReplyComponent = () => {
        setShowAddComment(false);
        setInputText("");
        setCommentDetails(null);
    };

    const appendIDToReply = (name, text) => {
        const existingID = inputText.match(/@\d+/);
        existingID
            ? setInputText(inputText.replace(existingID, `@${name}`))
            : setInputText(`@${name} ${text}`);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputText(e.target.value);
        setCommentDetails({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        fetch(`${process.env.REACT_APP_API_URL}/forum/${threadID}/comments`, {
            method: "POST",
            body: JSON.stringify(commentDetails),
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8",
            }),
        });
    };

    const toggleLike = async () => {
        await fetch(
            `${process.env.REACT_APP_API_URL}/forum/${threadID}/likes`,
            {
                method: "PUT",
            }
        );
    };

    if (!forumThread) return <p>Loading forum details...</p>;

    return (
        <div>
            <ForumThreadDetailsCard
                forumThread={forumThread}
                userData={forumThread.userData}
                onClickReply={() => handleReplyComponent(forumThread.userData)}
                toggleLike={toggleLike}
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
