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

  // Fetch posts from backend (only show visible posts)
  useEffect(() => {
    if (!props.postCardData) {
      const fetchPosts = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
          const data = await response.json();

          // Filter out hidden posts
          const visiblePosts = data.filter(post => post.isContentVisible !== false);
          setPostCardData(visiblePosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

      fetchPosts();
    } else {
      // Ensure only visible posts are set
      setPostCardData(props.postCardData.filter(post => post.isContentVisible !== false));
    }
  }, []);
  
  useEffect(() => {
    if (props.newPost) {
      setPostCardData((prevPosts) => [{ ...props.newPost, user: prevPosts.length + 1 }, ...prevPosts]);
    }
  }, [props.newPost]);

  const handlePostClick = (user) => navigate(`/post/${user}`);

  const handleEditClick = (post) => {
    setEditingPost(post);
    setNewContent(post.postDesc);
  };

  const handleSaveEdit = async () => {
    if (!editingPost || !editingPost.user) {
      console.error("Editing post is not properly set.");
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${editingPost.user}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPostContent: newContent }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to edit post.");
      }
  
      // Update post in state
      setPostCardData((prevData) =>
        prevData.map((post) =>
          post.user === editingPost.user ? { ...post, postDesc: newContent } : post
        )
      );
  
      // Close modal
      setEditingPost(null);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };
      
  const handleDeleteClick = async (user) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${user}/delete`, { method: "DELETE" });

      if (response.ok) {
        // Immediately remove the post from the state
        setPostCardData((prevData) => prevData.filter((post) => post.user !== user));
      } else {
        console.error("Failed to delete post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  
  const handleLike = async (user) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${user}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // Fetch updated post data
        const updatedPost = await fetch(`${process.env.REACT_APP_API_URL}/posts/${user}`);
        const updatedPostData = await updatedPost.json();
  
        // Update state with new data
        setPostCardData((prevData) =>
          prevData.map((post) =>
            post.user === user ? updatedPostData : post
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
      
  const handleReport = async (user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/flags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contentID: user,
                contentType: "post",
            }),
        });

        if (response.ok) {
            const { reported, contentID } = await response.json(); // Expecting { reported: true, contentID: id }

            setPostCardData((prevData) =>
                prevData.map((post) =>
                    post.user === contentID ? { ...post, reported } : post
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
              key={post.user}
              post={post}
              onClick={() => handlePostClick(post.user)}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
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
        <div className={styles.modalOverlay} onClick={() => setEditingPost(null)}>
          <div className={styles.editModal} onClick={(e) => e.stopPropagation()}>
            <h3>Edit Post</h3>
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className={styles.textarea}
            />
            <div className={styles.modalButtons}>
              <button className={styles.saveButton} onClick={handleSaveEdit}>
                Save
              </button>
              <button className={styles.cancelButton} onClick={() => setEditingPost(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {copied && <div className={styles.copiedMessage}>Link copied to clipboard!</div>}
    </div>
  );
}

export default PostCardContainer;
