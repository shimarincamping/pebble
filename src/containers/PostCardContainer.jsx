import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";

function PostCardContainer(props) {
  const navigate = useNavigate();

  const dummyPostCardData = [
    {
      id: 1,
      fullName: "Anoop Singh",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      courseName: "Bachelor of Software Engineering Student",
      time: "1 minute ago",
      linkedinUrl: "https://www.linkedin.com/in/anoopsinghhs", 
      postPicture: "https://i.imgur.com/U3Xbkb3.jpeg",
      title: "Successful Creation of my XR-based Application!",
      date: "DEC 30, 2024",
      postDesc: "My team and I have worked on an XR-based application called Sober.ly, serving as the technological interface for drug rehabilitation centres worldwide. We encountered many challenges, but through teamwork, dedication, and perseverance, we successfully launched the beta version. Our goal is to integrate AI-powered therapy tools into the platform and make it accessible globally to help those in need.",
    },
    {
      id: 2,
      fullName: "Haarish Nair",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      courseName: "Bachelor of Computer Science Student",
      time: "5 minutes ago",
      linkedinUrl: "https://www.linkedin.com/in/anoopsinghhs", 
      postPicture: "https://i.imgur.com/U3Xbkb3.jpeg",
      title: "Machine Learning Model for Predicting Cyber Attacks!",
      date: "DEC 28, 2024",
      postDesc: "Cybersecurity threats are evolving rapidly, and our team has developed a predictive machine learning model that identifies vulnerabilities before they can be exploited. Our approach leverages deep learning techniques to detect patterns in real-time security logs, preventing cyber attacks before they occur. This breakthrough can revolutionize how businesses and organizations protect their digital assets.",
      liked: false,
      reported: false,
    }
  ];

  const [postCardData, setPostCardData] = useState([]);
  const [copied, setCopied] = useState(false); // Global state for copied message


  useEffect(() => {
    setPostCardData(props.postCardData || dummyPostCardData);
  }, []);

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  const handleLike = (id) => {
    setPostCardData((prevData) =>
      prevData.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handleReport = (id) => {
    setPostCardData((prevData) =>
      prevData.map((post) =>
        post.id === id ? { ...post, reported: !post.reported } : post
      )
    );
  };

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
  };

  useEffect(() => {
    if (props.newPost) {
      setPostCardData((prevPosts) => [{ ...props.newPost, id: prevPosts.length + 1 }, ...prevPosts]);
    }
  }, [props.newPost]);


  //function to call backend for linkedin auth
  //This auth process is for the user to allow pebble access to their account
  const sendAuthReq = async () => {
    try{
      const response= await axios.get('https://localhost4001/auth/linkedin');
    }catch (e){
      console.error("Error during LinkedIn Auth : " + e);
    }
    sendAuthReq();
  }



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
              onCopyLink={handleCopyLink} // Pass function to PostCard
              sendAuthReq={sendAuthReq}
            />
          ))
        ) : (
          <ComponentLoadingSpinner />
        )}
      </div>

      {/* Floating Copy Message */}
      {copied && <div className={styles.copiedMessage}>Link copied to clipboard!</div>}
    </div>
  );
}

export default PostCardContainer;
