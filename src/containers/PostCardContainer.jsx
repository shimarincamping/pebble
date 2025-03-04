import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";

function PostCardContainer(props) {
  const navigate = useNavigate();
  const [postCardData, setPostCardData] = useState([]);
  const [copied, setCopied] = useState(false);

  // Fetch posts from backend
  useEffect(() => {
    if (!props.postCardData) {
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
    } else {
      setPostCardData(props.postCardData);
    }
  }, []);

  useEffect(() => {
    if (props.newPost) {
      setPostCardData((prevPosts) => [{ ...props.newPost, id: prevPosts.length + 1 }, ...prevPosts]);
    }
  }, [props.newPost]);

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
        // Fetch updated post data
        const updatedPost = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`);
        const updatedPostData = await updatedPost.json();
  
        // Update state with new data
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/flags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contentID: id,
                contentType: "post",
            }),
        });

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
