import React, { useState, useEffect } from "react";
import PostComment from "../components/PostComment";
import { useAuth } from "../containers/AuthProvider";

const PostCommentContainer = ({ postID, onClose }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [userDetails, setUserDetails] = useState(null); // ✅ Store user details
    const { user } = useAuth();
    const token = localStorage.getItem("jwtToken");

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!user || !token) {
                console.log("❌ Missing user or token:", { user, token });
                return;
            }
    
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/users/${user}/profile-information/basic`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
    
                if (!response.ok) {
                    console.error("❌ Failed to fetch user data:", response.status, await response.text());
                    return;
                }
    
                const userData = await response.json();
                console.log("✅ Fetched user details:", userData); // ⬅️ Log this to ensure `fullName` is present
                setUserDetails(userData || {});
            } catch (error) {
                console.error("❌ Error fetching user data:", error);
            }
        };
    
        fetchUserDetails();
    }, [user, token]);
                
    // Fetch existing comments
    useEffect(() => {
        if (!token) return;

        const fetchComments = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setComments(data);
                } else {
                    console.error("Failed to fetch comments.");
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchComments();
    }, [postID, token]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!postID) {
            console.error("Error: postID is undefined");
            return;
        }
    
        if (!comment.trim()) {
            console.log("Comment is empty");
            return;
        }
    
        try {
            // Send to backend
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ text: comment }), // ✅ Backend expects only "text"
                }
            );
    
            if (response.ok) {
                console.log("Comment posted successfully");
    
                // ✅ **Re-fetch comments from backend to get the latest data**
                const updatedCommentsResponse = await fetch(
                    `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
    
                if (updatedCommentsResponse.ok) {
                    const updatedComments = await updatedCommentsResponse.json();
                    setComments(updatedComments); // ✅ Update UI with fresh comments
                }
            } else {
                console.error("Failed to add comment. Response:", await response.text());
            }
    
            setComment(""); // ✅ Clear input field
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 1000);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };
    
    const handleEditComment = async (commentID, newText) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`, // ✅ Correct route
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        commentID: commentID, // ✅ Backend expects this
                        text: newText,
                    }),
                }
            );
    
            if (response.ok) {
                setComments((prev) =>
                    prev.map((comment) =>
                        comment.commentID === commentID
                            ? { ...comment, text: newText }
                            : comment
                    )
                );
            } else {
                console.error("Failed to edit comment.");
            }
        } catch (error) {
            console.error("Error editing comment:", error);
        }
    };
    
    const handleDeleteComment = async (commentID) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`, // ✅ Correct route
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ commentID }), // ✅ Backend expects this
                }
            );
    
            if (response.ok) {
                console.log("Comment deleted successfully");
    
                // **Re-fetch comments from backend** ✅ Ensures correct UI update
                const updatedComments = await fetch(
                    `${process.env.REACT_APP_API_URL}/posts/${postID}/comments`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
    
                if (updatedComments.ok) {
                    setComments(await updatedComments.json());
                }
            } else {
                console.error("Failed to delete comment.");
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const handleFlagComment = async (commentID, text) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/flags`, // ✅ Backend expects this route
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        postType: "postComment", // ✅ Backend expects this
                        commentID: commentID,
                        text: text,
                    }),
                }
            );
    
            if (response.ok) {
                alert("Comment flagged successfully!");
            } else {
                console.error("Failed to flag comment.");
            }
        } catch (error) {
            console.error("Error flagging comment:", error);
        }
    };
    
        

    return (
        <PostComment
            userDetails={userDetails}
            comments={comments}
            comment={comment}
            setComment={setComment}
            handleSubmit={handleSubmit}
            handleEditComment={handleEditComment}  // ✅ Now used
            handleDeleteComment={handleDeleteComment}  // ✅ Now used
            handleFlagComment={handleFlagComment} 
            onClose={onClose}
            showPopup={showPopup}
        />
    );
};

export default PostCommentContainer;
