import React, { useState, useEffect } from "react";
import DashboardStatsCard from "../components/DashboardStatsCard";

export default function DashboardStatsContainer() {
  const dummyProfileStats = {
    leaderboardRank: 25,
    totalPoints: 1692,
    monthlyPoints: 472,
    tickets: 5,
  };

  const [profileStats, setProfileStats] = useState(null);

  useEffect(() => {
    const fetchData = setInterval(() => {
      setProfileStats(dummyProfileStats);
    }, 5000);

    return () => clearInterval(fetchData);
  }, []);

  return (
    <>
      {profileStats ? (
        <DashboardStatsCard
          leaderboardRank={profileStats.leaderboardRank}
          totalPoints={profileStats.totalPoints}
          monthlyPoints={profileStats.monthlyPoints}
          tickets={profileStats.tickets}
        />
      ) : (
        <DashboardStatsCard />
      )}
    </>
  );
}
