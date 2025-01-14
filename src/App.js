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
import GoalsPage from "./pages/GoalsPage";
import CodingChallengePage from "./pages/CodingChallengePage";

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

        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/codingchallenge" element={<CodingChallengePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
