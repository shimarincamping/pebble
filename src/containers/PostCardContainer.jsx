import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";
import { useAuth } from "../containers/AuthProvider";


function PostCardContainer(props) {
    const navigate = useNavigate();
    const [postCardData, setPostCardData] = useState(null);
    const [editingPost, setEditingPost] = useState(null);
    const [newContent, setNewContent] = useState("");
    const [copied, setCopied] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const token = localStorage.getItem("jwtToken");

    useEffect(() => {
        
        const fetchUserDetails = async () => {
            if (!user) return;
        
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
                const data = await response.json();
        
                setUserDetails(data || {}); // ✅ Ensure userDetails is always an object
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
    
        fetchUserDetails();
    }, [user]);
    
    // Fetch posts from backend (only show visible posts)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let apiUrl = `${process.env.REACT_APP_API_URL}/posts`;
                
                // ✅ If singlePostID exists, fetch only that post
                if (props.singlePostID) {
                    apiUrl = `${process.env.REACT_APP_API_URL}/posts/${props.singlePostID}`;
                }

                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (props.singlePostID) {
                    setPostCardData([data]); // ✅ Store only 1 post as an array
                } else {
                    setPostCardData(data.filter((post) => post.isContentVisible !== false));
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        // Only fetch if no post data exists OR singlePostID is provided
        if (!props.postCardData || props.singlePostID) {
            fetchPosts();
        } else {
            // Ensure only visible posts are set (for normal profile view)
            setPostCardData(props.postCardData.filter((post) => post.isContentVisible !== false));
        }
    }, [props.singlePostID]); // ✅ Depend on singlePostID to avoid unnecessary fetches

    useEffect(() => {
        if (props.newPost) {
            setPostCardData((prevPosts) => [
                { ...props.newPost, postID: prevPosts.length + 1 },
                ...prevPosts,
            ]);
        }
    }, [props.newPost]);

    const handleAuthorClick = (authorID) => {
        navigate(`../profile/${authorID}`);
    }

    const handleEditClick = (post) => {
        setEditingPost(post);
        setNewContent(post.postDesc);
    };

    const handleSaveEdit = async () => {
        if (!editingPost || !editingPost.postID) {
            console.error("Editing post is not properly set.");
            return;
        }

        try {
          const response = await fetch(
              `${process.env.REACT_APP_API_URL}/posts/${editingPost.postID}`,
                        {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ newPostContent: newContent }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to edit post.");
            }

            // Update post in state
            setPostCardData((prevData) =>
                prevData.map((post) =>
                    post.postID === editingPost.postID
                        ? { ...post, postDesc: newContent }
                        : post
                )
            );

            // Close modal
            setEditingPost(null);
        } catch (error) {
            console.error("Error editing post:", error);
        }
    };

    const handleDeleteClick = async (postID) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
    
        console.log("Deleting post with ID:", postID); // Debugging
    
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            if (response.ok) {
                // ✅ Remove the deleted post from the state
                setPostCardData((prevData) => prevData.filter((post) => post.postID !== postID));
    
                console.log("Post deleted and removed from UI.");
            } else {
                const errorText = await response.text();
                console.error("Failed to delete post. Response:", errorText);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
              
    const handleLike = async (postID) => {
        try {
            // ✅ Step 1: Find the post in the current state
            setPostCardData((prevData) =>
                prevData.map((post) => {
                    if (post.postID === postID) {
                        // ✅ Toggle `liked` state manually
                        const isLiked = post.liked ?? false;
                        return {
                            ...post,
                            liked: !isLiked,
                        };
                    }
                    return post;
                })
            );
    
            // ✅ Step 2: Send Like/Unlike request
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/likes`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            if (!response.ok) {
                console.error("❌ Failed to like/unlike post.");
                return;
            }
    
            console.log("✅ Like/unlike request successful.");
        } catch (error) {
            console.error("❌ Error liking post:", error);
        }
    };
                          
    const handleReport = async (postID,text) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${postID}/flags`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        text:text,
                        postType: "post",
                    }),
                }
            );

            if (response.ok) {
                const { reported, contentID } = await response.json(); // Expecting { reported: true, contentID: id }

                setPostCardData((prevData) =>
                    prevData.map((post) =>
                        post.postID === contentID ? { ...post, reported } : post
                    )
                );

                console.log("Post reported successfully.");
            } else {
                console.error("Failed to report post.");
            }
        } catch (error) {
            console.error("Error reporting post:", error);
        }
    };

    const handleCopyLink = (postID) => {
        const postLink = `${window.location.origin}/post/${postID}`; // Make sure the path is correct
        navigator.clipboard.writeText(postLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLinkedinSync = async (postID) => {
        try{
            const linkedRes = await fetch (`${process.env.REACT_APP_API_URL}/posts/${postID}/linkedin`,{
                method: "POST",
    
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
    
                body : JSON.stringify({ 
                    "currentUserID" : user
                })
            })
                .then(response => response.json())
                .then(data =>{
                    if(data.action === 'redirect'){
                        console.log(`data.action ${data.action}`);
                        console.log(`data.authUrl ${data.authUrl}`);
                        alert('You will now be redirected to the LinkedIn platform for authentication.\nAfter the redirect, please click on the linkedIn logo to complete the sync process.')
                        window.location.href = data.authUrl;
                    }else if(data.action === 'alert'){
                        alert('Post synced on LinkedIn successfully!');
                    }
                })


        }catch(e){
            console.error("error occured @handleLinkedinSync: ",e); 
        }
       
    }
    return (
        <div className={styles.posts}>
            <div className={styles.postsData}>
            {postCardData ? (
                postCardData.map((post) => (
                    <PostCard
                        key={post.postID}
                        post={post}
                        currentUserDetails={userDetails} 
                        onAuthorClick={() => handleAuthorClick(post.authorID)}
                        onEditClick={handleEditClick}
                        onDeleteClick={() => handleDeleteClick(post.postID)}
                        onLike={handleLike}
                        onReport={() => handleReport(post.postID,post.title+post.postDesc)}
                        onCopyLink={handleCopyLink}
                        handleLinkedinSync={() => handleLinkedinSync(post.postID)}
                        isProfilePage={props.isProfilePage}
                    />
                ))
            ) : (
                <ComponentLoadingSpinner />
            )}
            </div>
            {editingPost && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setEditingPost(null)}
                >
                    <div
                        className={styles.editModal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Edit Post</h3>
                        <textarea
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className={styles.textarea}
                        />
                        <div className={styles.modalButtons}>
                            <button
                                className={styles.saveButton}
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                            <button
                                className={styles.cancelButton}
                                onClick={() => setEditingPost(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {copied && (
                <div className={styles.copiedMessage}>
                    Link copied to clipboard!
                </div>
            )}
        </div>
    );
}

export default PostCardContainer;
