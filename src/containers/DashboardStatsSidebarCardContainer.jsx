import React, { useState, useEffect } from "react";
import DashboardStatsSidebarCard from "../components/DashboardStatsSidebarCard";

export default function DashboardStatsSidebarCardContainer() {
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
        <DashboardStatsSidebarCard
          leaderboardRank={profileStats.leaderboardRank}
          totalPoints={profileStats.totalPoints}
          monthlyPoints={profileStats.monthlyPoints}
          tickets={profileStats.tickets}
        />
      ) : (
        <DashboardStatsSidebarCard />
      )}
    </>
  );
}
