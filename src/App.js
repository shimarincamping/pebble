import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import GoalsPage from "./pages/GoalsPage";
import ForumPage from "./pages/ForumPage";
import ForumThreadPage from "./pages/ForumThreadPage";
import CodingChallengePage from "./pages/CodingChallengePage";
import CareerRoadmapPage from "./pages/CareerRoadmapPage";
import CareerRoadmapPostPage from "./pages/CareerRoadmapPostPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import Moderator from "./pages/ModeratorDashboardPage";
import RewardsPage from "./pages/RewardsPage";

import "./styles/global.module.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/splash" />} />
                <Route path="/splash" element={<SplashScreen />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />

                <Route path="/feed" element={<FeedPage />} />

                <Route
                    path="/profile"
                    element={<Navigate to="/profile/me" />}
                />
                <Route path="/profile/:id" element={<ProfilePage />} />

                <Route path="/forum" element={<ForumPage />} />
                <Route path="/forum/:threadID" element={<ForumThreadPage />} />
                <Route
                    path="/codingchallenge"
                    element={<CodingChallengePage />}
                />

                <Route path="/roadmap" element={<CareerRoadmapPage />} />
                <Route
                    path="/roadmap/:id"
                    element={<CareerRoadmapPostPage />}
                />

                <Route path="/goals" element={<GoalsPage />} />
                <Route path="/rewards" element={<RewardsPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />

                <Route path="/moderator" element={<Moderator />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
