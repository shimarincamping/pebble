import React, { useState } from "react";
import PostComment from "../components/PostComment";

const PostCommentContainer = ({ onClose }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(
        "That is so very insightful! This perspective is a great addition to the discussion. I believe that considering these factors will definitely help us make a better decision."
    );
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        // Anoop Singh should be the first commenter
        const newComment = {
            id: comments.length + 1,
            author: "Anoop Singh" ,
            text: comment,
            profilePic: "https://i.imgur.com/qPzFvF4.jpeg"
        };

        setComments([...comments, newComment]);
        setComment("");

        // Show popup for 2 seconds
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
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
