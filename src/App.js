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
import TestPage from "./pages/TestPage";
import "./styles/global.module.css";



function App() {
  return (   
    <BrowserRouter>
      {/* <Link to="/register">Register</Link> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/test" element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
