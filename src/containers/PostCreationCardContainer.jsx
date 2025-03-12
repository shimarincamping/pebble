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
    }, [user]);

    const handlePostTitleChange = (event) => {
        setPostData((prev) => ({ ...prev, title: event.target.value }));
    };

    const handlePostDescriptionChange = (event) => {
        setPostData((prev) => ({ ...prev, postDesc: event.target.value }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPostData((prev) => ({ ...prev, postPicture: imageURL }));
        }
    };

    const handlePostSubmit = async () => {
        if (!postData?.title?.trim() || !postData?.postDesc?.trim()) {
            console.error("Title and description are required.");
            return;
        }

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        title: postData.title,
                        postDesc: postData.postDesc,
                        postPicture: postData.postPicture || null, // Ensure null if empty
                        linkedinURL: postData.linkedinURL || null, // Ensure null if empty
                    }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to create post: ${errorText}`);
            }

            // Fetch the newly created post to update the feed
            const newPost = {
                ...postData,
                id: Date.now(), // Temporary ID before getting the real one from Firestore
            };
            onNewPost(newPost);

            // Reset form after successful submission
            setPostData({
                title: "",
                postDesc: "",
                postPicture: "",
                linkedinURL: "",
            });

            console.log("Post created successfully!");
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
