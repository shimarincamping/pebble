import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";

function PostCardContainer({ newPost }) {
  const navigate = useNavigate();
  const [postCardData, setPostCardData] = useState([]);
  const [copied, setCopied] = useState(false);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
        const data = await response.json();
        setPostCardData(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (newPost) {
      setPostCardData((prevPosts) => [{ ...newPost, id: prevPosts.length + 1 }, ...prevPosts]);
    }
  }, [newPost]);

  const handlePostClick = (id) => navigate(`/post/${id}`);

  const handleLike = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        setPostCardData((prevData) =>
          prevData.map((post) =>
            post.id === id ? { ...post, liked: !post.liked } : post
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/flags`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentID: id,
          contentType: "post", // Adjust based on content type (post, thread, etc.)
        }),
      });
  
      if (response.ok) {
        setPostCardData((prevData) =>
          prevData.map((post) =>
            post.id === id ? { ...post, reported: true } : post
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
        {postCardData.length > 0 ? (
          postCardData.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post.id)}
              onLike={handleLike}
              onReport={handleReport}
              onCopyLink={handleCopyLink}
            />
          ))
        ) : (
          <ComponentLoadingSpinner />
        )}
      </div>
      {copied && <div className={styles.copiedMessage}>Link copied to clipboard!</div>}
    </div>
  );
}

export default PostCardContainer;
