import React, { useState } from "react";
import PostCreationCard from "../components/PostCreationCard";

function PostCreationCardContainer({ onNewPost }) {
    const [postData, setPostData] = useState({
        fullName: "Anoop Singh",
        profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
        courseName: "Bachelor of Software Engineering Student",
        time: "1 minute ago",
        linkedinUrl: "https://www.linkedin.com/in/anoopsingh",
        postPicture: "",
        title: "Successful Creation of my XR-based Application!",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        postDesc: "My team and I have worked on an crowdsourcing app called Sober.ly...",
    });

    const handlePostTitleChange = (event) => {
        setPostData({ ...postData, title: event.target.value });
    };

    const handlePostDescriptionChange = (event) => {
        setPostData({ ...postData, postDesc: event.target.value });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPostData({ ...postData, postPicture: imageURL });
        }
    };

    const handlePostSubmit = async () => {
        if (postData.title.trim() && postData.postDesc.trim()) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/createPost`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: postData.title,
                        postDesc: postData.postDesc,
                        postPicture: postData.postPicture,
                        linkedinURL: postData.linkedinUrl,
                    }),
                });

                if (response.ok) {
                    const newPost = { ...postData, id: Date.now() };
                    onNewPost(newPost);
                    setPostData({ ...postData, title: "", postDesc: "", postPicture: "" }); // Reset after posting
                } else {
                    console.error("Failed to create post:", await response.text());
                }
            } catch (error) {
                console.error("Error submitting post:", error);
            }
        }
    };

    return (
        <PostCreationCard
            postData={postData}
            onPostTitleChange={handlePostTitleChange}
            onPostDescriptionChange={handlePostDescriptionChange}
            onImageUpload={handleImageUpload}
            onPostSubmit={handlePostSubmit}
        />
    );
}

export default PostCreationCardContainer;
