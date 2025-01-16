import React, { useState, useEffect } from "react";
import NetworkSidebarCard from "../components/NetworkSidebarCard";

function NetworkSidebarCardContainer() {
  const dummyNetworkData = {
    followerCount : 105,
    myFollowers : [
      { userID: 1, shortName: "Brendan", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 2, shortName: "Haarish", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 3, shortName: "Najihah", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 4, shortName: "Wei Lee", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 5, shortName: "Ivy Chung", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 6, shortName: "Wei Zhe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 7, shortName: "Jay Leow", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 8, shortName: "Nicholas", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" }
    ],

    mySuggestedUsers : [
      { userID: 9, shortName: "Frederick Lau", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
      { userID: 10, shortName: "John Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
      { userID: 11, shortName: "Jane Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Computer Science", year: 3 }
    ]
  }

  const [networkData, setNetworkData] = useState(null);

  useEffect(
      () => {
          // Replace this with a fetch request. The server should trim the raw database response to fit the object above.
          const fetchData = setInterval(() => {
              setNetworkData(dummyNetworkData);
          }, 5000);

          return () => clearInterval(fetchData);
      },
  []);

  function handleFollowUser({target}) {
    console.log(`Sent a server request to follow user ID: ${target.value}`);
  }

  return (
    <>
      {
        networkData ? (
          <NetworkSidebarCard 
            {...networkData}
            handleFollowUser={handleFollowUser}
          />
        ) : (
          <NetworkSidebarCard />
        )
      }
    </>
  );
}

export default NetworkSidebarCardContainer;
