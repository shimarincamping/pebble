import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get ID from URL
import { useNavigate } from "react-router-dom";
import ForumThreadDetailsCard from "../components/ForumThreadDetailsCard";
import ForumThreadComments from "../components/ForumThreadComments";
import ForumThreadAddComment from "../components/ForumThreadAddComment";
import ForumThreadEditThread from "../components/ForumThreadEditThread";
import ForumThreadEditComment from "../components/ForumThreadEditComment";

const ForumThreadContainer = () => {
    const { threadID } = useParams(); // Get the roadmap ID from
    const navigate = useNavigate();
    const [forumThread, setForumThread] = useState(null);
    const [showAddComment, setShowAddComment] = useState(false);
    const [showThreadEditField, setShowThreadEditField] = useState(false);
    const [showCommentEditField, setShowCommentEditField] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [inputText, setInputText] = useState(" ");
    const [commentDetails, setCommentDetails] = useState(null);
    const [replyTo, setReplyTo] = useState(null);
    const [commentIndex, setCommentIndex] = useState(null);
    const [editedCommentData, setEditedCommentData] = useState(null);

    const token = localStorage.getItem("jwtToken");

    // Fetch forum data based on the ID
    const fetchForumThread = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (!response.ok) {
                alert("Forum thread not found!");
                navigate("/forum");
            }
            const data = await response.json();
            setForumThread(data);
        } catch (error) {
            console.error("Error fetching forum thread:", error);
            setForumThread(null);
        }
    };

    useEffect(() => {
        fetchForumThread();
    }, []);

    useEffect(() => {
        if (replyTo) {
            appendIDToReply(replyTo.fullName, inputText);
        }
    }, [replyTo]);

    if (!forumThread) {
        return <p>Loading roadmap details...</p>;
    }

    // CRUD for threads

    const handleForumEditComponent = (forumThread) => {
        setShowThreadEditField(true);

        setEditedData({
            threadTitle: forumThread.threadTitle,
            threadDescription: forumThread.threadDescription,
        });
    };

    const handleThreadEditInput = (e) => {
        const { name, value } = e.target;

        setEditedData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleThreadLike = async () => {
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
                fetchForumThread();
            } else {
                alert("User cannot like their own thread!");
            }
        } catch (error) {
            console.error("Error liking thread:", error);
        }
    };

    const toggleThreadFlag = async (forumThread) => {
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

    const handleThreadEditSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("jwtToken");

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        threadTitle: editedData.threadTitle,
                        threadDescription: editedData.threadDescription,
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    }),
                }
            );
            if (!response.ok) {
                alert("Failed to edit thread, user does not have permission.");
            } else {
                setForumThread((prev) => ({
                    ...prev,
                    threadTitle: editedData.threadTitle,
                    threadDescription: editedData.threadDescription,
                }));
            }
        } catch (error) {
            console.error("Error deleting thread:", error);
        }
        setShowThreadEditField(false);
    };

    const handleThreadDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this thread?"))
            return;

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                navigate("/forum");
            } else {
                alert(
                    "Failed to delete message, user does not have permission."
                );
            }
        } catch (error) {
            console.error("Error deleting thread:", error);
        }
    };

    // Comments
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

    const handleCommentEditInput = (e) => {
        const { name, value } = e.target;
        setEditedCommentData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        const token = localStorage.getItem("jwtToken");
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/comments`,
                {
                    method: "POST",
                    body: JSON.stringify(commentDetails),
                    headers: new Headers({
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    }),
                }
            );

            if (response.ok) {
                alert("Comment succesfully submitted!");
                fetchForumThread();
                setShowAddComment(false);
            } else {
                alert("Failed to submit comment.");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    const handleCommentEditComponent = (comment, index) => {
        console.log(comment.commentID);
        setShowCommentEditField(true);
        setCommentIndex(index);

        setEditedCommentData({
            commentDetails: comment.commentDetails,
        });
    };

    const toggleCommentLike = async (comment) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/comments/likes`,
                {
                    method: "PUT",
                    body: JSON.stringify({ commentID: comment.commentID }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.ok) {
                fetchForumThread();
            } else {
                alert("User cannot like their own comment!");
            }
        } catch (error) {
            console.error("Error liking comment:", error);
        }
    };

    const toggleCommentFlag = async (comment) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/flags`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        text: comment.commentDetails,
                        postType: "threadComment",
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

    const handleCommentEditSubmit = async (e, comment) => {
        e.preventDefault();

        const token = localStorage.getItem("jwtToken");

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/comments`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        commentDetails: editedCommentData.commentDetails,
                        commentID: comment.commentID,
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    }),
                }
            );
            if (!response.ok) {
                alert("Failed to edit comment, user does not have permission.");
            } else {
                alert("Successfully edited comment!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
        setShowCommentEditField(false);
    };

    const handleCommentDelete = async (comment) => {
        if (!window.confirm("Are you sure you want to delete this comment?"))
            return;

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/forum/${threadID}/comments`,
                {
                    method: "DELETE",
                    body: JSON.stringify({
                        commentID: comment.commentID,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                alert("Successfully deleted message!");
                fetchForumThread();
            } else {
                alert(
                    "Failed to delete message, user does not have permission."
                );
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    if (!forumThread) return <p>Loading forum details...</p>;

    return (
        <div>
            <ForumThreadDetailsCard
                forumThread={forumThread}
                userData={forumThread.userData}
                onClickReply={() => handleReplyComponent(forumThread.userData)}
                toggleLike={toggleThreadLike}
                onClickFlag={() => toggleThreadFlag(forumThread)}
                onClickEdit={() => handleForumEditComponent(forumThread)}
                handleDelete={handleThreadDelete}
            />
            {showThreadEditField ? (
                <ForumThreadEditThread
                    onSubmit={handleThreadEditSubmit}
                    onChange={handleThreadEditInput}
                    editedData={editedData}
                    showThreadEditField={() => setShowThreadEditField(false)}
                />
            ) : null}
            <div>
                {showAddComment ? (
                    <ForumThreadAddComment
                        repliesTo={replyTo.fullName}
                        onCancel={() => closeReplyComponent()}
                        onChange={handleInputChange}
                        onSubmit={handleCommentSubmit}
                        inputText={inputText}
                    />
                ) : null}
                {forumThread.comments.map((comment, index) => (
                    <div key={index}>
                        <ForumThreadComments
                            key={index}
                            comment={comment}
                            userData={comment.userData}
                            onClickReply={() => {
                                handleReplyComponent(comment.userData);
                            }}
                            onClickEdit={() =>
                                handleCommentEditComponent(comment, index)
                            }
                            toggleLike={() => {
                                toggleCommentLike(comment);
                            }}
                            toggleFlag={() => {
                                toggleCommentFlag(comment);
                            }}
                            handleDelete={() => {
                                handleCommentDelete(comment);
                            }}
                        />
                        {index === commentIndex && showCommentEditField && (
                            <ForumThreadEditComment
                                onChange={handleCommentEditInput}
                                onSubmit={(e) =>
                                    handleCommentEditSubmit(e, comment)
                                }
                                editedCommentData={editedCommentData}
                                showCommentEditField={() =>
                                    setShowCommentEditField(false)
                                }
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForumThreadContainer;
