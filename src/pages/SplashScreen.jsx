import React from "react";
import styles from "../styles/SplashScreen.module.css";
import { useNavigate } from "react-router-dom";
export default function SplashScreen() {
  const navigateToHome = useNavigate();

  const handleNavigate = () => {
    navigateToHome("/login");
  };

  //   const interval = setInterval(handleNavigate, 3000);

  return (
    <div className={styles.pebbleLogo}>
      <img
        src="/img/pebbleLogo.png"
        alt="Pebble Logo"
        className={styles.pebbleLogo__image}
      />
    </div>
  );
}
