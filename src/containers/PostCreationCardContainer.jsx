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
        postDesc: "My team and I have worked on an XR-based application called Sober.ly, serving as the technological interface for drug rehabilitation centres worldwide. We encountered many challenges, but through teamwork, dedication, and perseverance, we successfully launched the beta version. Our goal is to integrate AI-powered therapy tools into the platform and make it accessible globally to help those in need.",
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

    const handlePostSubmit = () => {
        if (postData.title.trim() && postData.postDesc.trim()) {
            onNewPost(postData);
            setPostData({ ...postData, title: "", postDesc: "", postPicture: "" }); // Reset after posting
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
