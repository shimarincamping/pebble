import React, { useState, useEffect } from "react";
import LeaderboardSectionHeader from "../components/LeaderboardSectionHeader";
import LeaderboardSectionItem from "../components/LeaderboardSectionItem";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
export default function LeaderboardPageContainer({ setSelectedProfile }) {
  const leaderboardDummyData = [
    {
      userID: 5,
      fullName: "Frederick Lau Li Yuan",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      email: "fredericklau@sd.taylors.edu.my",
      bio: "I leverage coding skills to craft creative websites for startups, enhancing client impressions with impactful designs for smaller audiences while also volunteering on the side.",
      studentID: "0348271",
      intake: "202208",
      courseName: "Software Engineering",
      totalPoints: 475,
      prizesClaimed: 4,
      connections: 13,
    },
    {
      userID: 8,
      fullName: "Yap Pei Ern",
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      email: "peiern.yap@sd.taylors.edu.my",
      bio: "I leverage coding skills to craft creative websites for startups, enhancing client impressions with impactful designs for smaller audiences while also volunteering on the side.",
      studentID: "0350513",
      intake: "202208",
      courseName: "Computer Science",
      totalPoints: 450,
      prizesClaimed: 2,
      connections: 3,
    },
  ];

  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    const fetchData = setInterval(() => {
      setLeaderboardData(leaderboardDummyData);
    }, 5000);

    return () => clearInterval(fetchData);
  }, []);

  return (
    <div>
      <LeaderboardSectionHeader
        title="Leaderboard"
        subtitle="Top Performing Students"
        buttonText="Goals"
      />
      {leaderboardData ? (
        <>
          {leaderboardData.map((ranking, index) => (
            <div onClick={() => setSelectedProfile(ranking)}>
              <LeaderboardSectionItem leaderboardIndex={index} {...ranking} />
            </div>
          ))}
        </>
      ) : (
        <ComponentLoadingSpinner />
      )}
    </div>
  );
}
