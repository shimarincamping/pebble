import React, { useState, useEffect } from "react";
import NetworkCard from "../components/NetworkCard";
import styles from "../styles/Sidebar.module.css";

function NetworkCardContainer() {
  const dummyNetworkData = [
    { userID: 1, fullName: "Brendan", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 2, fullName: "Haarish", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 3, fullName: "Najihah", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 4, fullName: "Wei Lee", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 5, fullName: "Ivy Chung", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 6, fullName: "Wei Zhe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 7, fullName: "Jay Leow", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
    { userID: 8, fullName: "Nicholas", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" }
  ];

  const dummySuggestedNetworkData = [
    { userID: 9, fullName: "Frederick Lau", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
    { userID: 10, fullName: "John Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
    { userID: 11, fullName: "Jane Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Computer Science", year: 3 },
  ];

  const [networkData, setNetworkData] = useState([]);
  const [suggestedNetworkData, setSuggestedNetworkData] = useState([]);

  useEffect(() => {
    setNetworkData(dummyNetworkData);
    setSuggestedNetworkData(dummySuggestedNetworkData);
  }, []);

  return (
    <section className={styles.networkCardContainer}>
      <div className={styles.networkCardContent}>
        {/* My Network Section */}
        <div className={styles.myNetwork}>
          <div className={styles.networkTitle}>
              <h1>My Network <span className={styles.networkNumber}>(105)</span></h1>
          </div>
          <div className={styles.myNetwork1}>
            {networkData.map((user) => (
              <NetworkCard
                key={user.userID}
                name={user.fullName}
                pictureURL={user.profilePicture}
              />
            ))}
          </div>
          <button className={styles.seeMoreButton}>See More</button>
        </div>

        {/* People You May Know Section */}
        <div className={styles.suggestedNetwork}>
          <div className={styles.networkTitle}>
              <h1>People You May Know</h1>
          </div>
          {suggestedNetworkData.map((user) => (
            <NetworkCard
              key2={user.userID}
              name2={user.fullName}
              pictureURL2={user.profilePicture}
              course={user.course}
              year={`Year ${user.year}`}
            />
          ))}
          <hr className={styles.line}></hr>
          <button className={styles.seeAllButton}>See All</button>
        </div>
      </div>
    </section>
  );
}

export default NetworkCardContainer;
