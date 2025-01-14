import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import GoalsPage from "./pages/GoalsPage";
import SplashScreen from "./pages/SplashScreen";
import FeedPage from "./pages/FeedPage"
import CodingChallengePage from "./pages/CodingChallengePage";

import "./styles/global.module.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/register">Register</Link> */}
      <Routes>
        <Route path="/" element={<Navigate to="/splash" />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/codingchallenge" element={<CodingChallengePage />} />  {/*Use this path for code challenges pls thnx*/ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
