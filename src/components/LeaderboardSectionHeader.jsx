import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Leaderboard.module.css";

export default function LeaderboardSectionHeader(props) {
  return (
    <div className={`${styles.leaderboardHeader}`}>
      <header>
        <section>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </section>
        <section>
          <Link to={props.buttonRedirect}>
            <button>{props.buttonText}</button>
          </Link>
        </section>
      </header>
      <hr />
    </div>
  );
}
