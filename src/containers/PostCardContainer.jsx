import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import styles from "../styles/PostCard.module.css";

function PostCardContainer() {
  const navigate = useNavigate();

  const dummyPostCardData = [
    {
      id: 1,
      fullName: "Anoop Singh",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      courseName: "Bachelor of Software Engineering Student",
      time: "1 minute ago",
      linkedinUrl: "https://www.linkedin.com/in/anoopsingh", 
      postPicture: "https://i.imgur.com/U3Xbkb3.jpeg",
      title: "Successful Creation of my XR-based Application!",
      date: "DEC 30, 2024",
      taggedName: "with IVY SHIN, KEK HAN SHIN, NICHOLAS CHAN, HAARISH NAIR",
      postDesc: "My team and I have worked on an XR-based application called Sober.ly, serving as the technological interface for drug rehabilitation centres worldwide. We encountered many challenges, but through teamwork, dedication, and perseverance, we successfully launched the beta version. Our goal is to integrate AI-powered therapy tools into the platform and make it accessible globally to help those in need.",
    },
    {
      id: 2,
      fullName: "Haarish Nair",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      courseName: "Bachelor of Computer Science Student",
      time: "5 minutes ago",
      linkedinUrl: "https://www.linkedin.com/in/anoopsingh", 
      postPicture: "https://i.imgur.com/U3Xbkb3.jpeg",
      title: "Machine Learning Model for Predicting Cyber Attacks!",
      date: "DEC 28, 2024",
      taggedName: "with EDMOND YONG, BRENDAN OOI, NAJIHAN SYAHRIZA",
      postDesc: "Cybersecurity threats are evolving rapidly, and our team has developed a predictive machine learning model that identifies vulnerabilities before they can be exploited. Our approach leverages deep learning techniques to detect patterns in real-time security logs, preventing cyber attacks before they occur. This breakthrough can revolutionize how businesses and organizations protect their digital assets.",
    }
  ];

  const [postCardData, setPostCardData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPostCardData(dummyPostCardData);
    }, 2000);
  }, []);

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className={styles.posts}>
      <div className={styles.postsData}>
        {postCardData.length > 0 ? (
          postCardData.map((post) => (
            <PostCard key={post.id} post={post} onClick={() => handlePostClick(post.id)} />
          ))
        ) : (
          <ComponentLoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default PostCardContainer;
