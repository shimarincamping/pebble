import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import FeedPage from "./pages/FeedPage"
import ProfilePage from "./pages/ProfilePage";
import GoalsPage from "./pages/GoalsPage";
import ForumPage from "./pages/ForumPage";
import CodingChallengePage from "./pages/CodingChallengePage";
import Leaderboard from "./pages/Leaderboard";
import Test from "./pages/Test";
import "./styles/global.module.css";
import PageStructureTest from "./pages/PageStructureTest";

function App() {
  return (   
    <BrowserRouter>
      {/* <Link to="/register">Register</Link> */}
      <Routes>
        <Route path="/" element={<Navigate to="/splash" />} /> 
        <Route path="/splash" element={<SplashScreen />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/feed" element={<FeedPage />} />

        <Route path="/profile" element={<Navigate to="/profile/me" />} /> 
        <Route path="/profile/:id" element={<ProfilePage />} />

        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/codingchallenge" element={<CodingChallengePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<PageStructureTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
