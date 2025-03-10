import React, { useState, useEffect } from "react";
import PostComment from "../components/PostComment";

const PostCommentContainer = ({ postID, onClose }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    // Fetch existing comments when component mounts
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${postID}/comments`);
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
    }, [postID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting comment for postID:", postID);
    
        if (!postID) {
            console.error("Error: postID is undefined");
            return;
        }
    
        if (!comment.trim()) {
            console.log("Comment is empty");
            return;
        }
    
        try {
            const newComment = {
                id: Date.now(), // Temporary ID to avoid UI flicker
                text: comment,
                author: "You", // Replace with actual username if available
                profilePic: "your-profile-pic-url" // Replace with actual profile pic URL
            };
    
            // **Update UI immediately**
            setComments([...comments, newComment]);
    
            // **Send to backend**
            const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${postID}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: comment }),
            });
    
            if (response.ok) {
                console.log("Comment posted successfully");
            } else {
                console.error("Failed to add comment. Response:", await response.text());
            }
    
            setComment(""); // Clear input field
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };
        
    return (
        <PostComment
            comments={comments}
            comment={comment}
            setComment={setComment}
            handleSubmit={handleSubmit}
            onClose={onClose}
            showPopup={showPopup}
        />
    );
};

export default PostCommentContainer;
