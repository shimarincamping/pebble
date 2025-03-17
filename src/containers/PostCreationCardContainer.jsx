import React, { useState, useEffect } from "react";
import PostCreationCard from "../components/PostCreationCard";
import { useAuth } from "../containers/AuthProvider";

function PostCreationCardContainer({ onNewPost }) {
    const token = localStorage.getItem("jwtToken");
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const [postData, setPostData] = useState({});

    useEffect(() => {
        const handleFetchData = async () => {
            const currentUserID = await user; // Ensure user ID is available

            const fetchedData = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${currentUserID}/profile-information/basic`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const fetchedJsonData = await fetchedData.json();

            setPostData(fetchedJsonData || {}); // Ensure postData is always an object
        };

        handleFetchData();
    }, [token, user]);

    const handlePostTitleChange = (event) => {
        setPostData((prev) => ({ ...prev, title: event.target.value }));
    };

    const handlePostDescriptionChange = (event) => {
        setPostData((prev) => ({ ...prev, postDesc: event.target.value }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        setPostData((prev) => ({ ...prev, postPictureFile: file })); // Store the actual file
    };
    

    const handlePostSubmit = async () => {
        if (!postData?.title?.trim() || !postData?.postDesc?.trim()) {
            console.error("Title and description are required.");
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append("title", postData.title);
            formData.append("postDesc", postData.postDesc);
            formData.append("linkedinURL", postData.linkedinURL || "");
    
            if (postData.postPictureFile) {
                console.log("Appending file:", postData.postPictureFile); // Debugging output
                formData.append("file", postData.postPictureFile);
            }
    
            // Debugging: Log FormData contents
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]); // Ensure file is included
            }
    
            const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`, // Don't set Content-Type for FormData
                },
                body: formData,
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to create post: ${errorText}`);
            }
    
            const data = await response.json();
            onNewPost(data.post);
    
            setPostData({ title: "", postDesc: "", postPictureFile: null, linkedinURL: "" });
    
            alert("Post created successfully!");
        } catch (error) {
            console.error("Error submitting post:", error);
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
