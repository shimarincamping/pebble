import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import GoalsPage from "./pages/GoalsPage";

import "./styles/global.module.css"

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/register">Register</Link> */}
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/goals" element={<GoalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
