import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";
import { useAuth } from "../containers/AuthProvider";


function PostCardContainer(props) {
    const navigate = useNavigate();
    const [postCardData, setPostCardData] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [newContent, setNewContent] = useState("");
    const [copied, setCopied] = useState(false);
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const visiblePosts = postCardData.filter((post) => post.isContentVisible !== false);
    const token = localStorage.getItem("jwtToken");

    useEffect(() => {
        const handleFetchData = async () => {
            if (!user) return;
    
            try {
                const fetchedData = await fetch(
                    `${process.env.REACT_APP_API_URL}/users/${user.userID}/profile-information/basic`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const fetchedJsonData = await fetchedData.json();
    
                setPostCardData(fetchedJsonData || {}); // Ensure postData is always an object
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        handleFetchData();
    }, [user]);

    // Fetch posts from backend (only show visible posts)
    useEffect(() => {
        if (!props.postCardData) {
            const fetchPosts = async () => {
                try {
                    const response = await fetch(
                        `${process.env.REACT_APP_API_URL}/posts`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    const data = await response.json();

                    // Filter out hidden posts
                    const visiblePosts = data.filter(
                        (post) => post.isContentVisible !== false
                    );
                    setPostCardData(visiblePosts);
                } catch (error) {
                    console.error("Error fetching posts:", error);
                }
            };

            fetchPosts();
        } else {
            // Ensure only visible posts are set
            setPostCardData(
                props.postCardData.filter(
                    (post) => post.isContentVisible !== false
                )
            );
        }
    }, []);

    useEffect(() => {
        if (props.newPost) {
            setPostCardData((prevPosts) => [
                { ...props.newPost, id: prevPosts.length + 1 },
                ...prevPosts,
            ]);
        }
    }, [props.newPost]);

    const handlePostClick = (id) => navigate(`/post/${id}`);

    const handleEditClick = (post) => {
        setEditingPost(post);
        setNewContent(post.postDesc);
    };

    const handleSaveEdit = async () => {
        if (!editingPost || !editingPost.id) {
            console.error("Editing post is not properly set.");
            return;
        }

        try {
          const response = await fetch(
              `${process.env.REACT_APP_API_URL}/posts/${editingPost.id}`,
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
                    post.id === editingPost.id
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

    const handleDeleteClick = async (id) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
    
        console.log("Deleting post with ID:", id); // Debugging
    
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/posts/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            if (response.ok) {
                setPostCardData((prevData) =>
                    prevData.map((post) =>
                        post.id === id ? { ...post, isContentVisible: false } : post
                    )
                );
                console.log("Post marked as hidden.");
            } else {
                const errorText = await response.text();
                console.error("Failed to delete post. Response:", errorText);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
          
    const handleLike = async (id) => {
      try {
          const response = await fetch(
              `${process.env.REACT_APP_API_URL}/posts/${id}/likes`,
              {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                  },
              }
          );
  
          if (response.ok) {
              const updatedPost = await fetch(
                  `${process.env.REACT_APP_API_URL}/posts/${id}`,  // ✅ Use id instead of post.id
                  {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                      },
                  }
              );
              const updatedPostData = await updatedPost.json();
  
              setPostCardData((prevData) =>
                  prevData.map((post) =>
                      post.id === id ? updatedPostData : post
                  )
              );
  
              console.log("Post like toggled successfully.");
          } else {
              console.error("Failed to like/unlike post.");
          }
      } catch (error) {
          console.error("Error liking post:", error);
      }
    };
  
    const handleReport = async (id) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/flags`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        contentID: id,
                        contentType: "post",
                    }),
                }
            );

            if (response.ok) {
                const { reported, contentID } = await response.json(); // Expecting { reported: true, contentID: id }

                setPostCardData((prevData) =>
                    prevData.map((post) =>
                        post.id === contentID ? { ...post, reported } : post
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

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.posts}>
            <div className={styles.postsData}>
            {visiblePosts.length > 0 ? (
                visiblePosts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        currentUserID={user?.userID} // Pass userID as a prop
                        onClick={() => handlePostClick(post.id)}
                        onEditClick={handleEditClick}
                        onDeleteClick={() => handleDeleteClick(post.id)}
                        onLike={handleLike}
                        onReport={handleReport}
                        onCopyLink={handleCopyLink}
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
