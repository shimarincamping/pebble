import React from "react";
import { TbAward, TbCalendarMonth, TbGift } from "react-icons/tb";
import { GiPlasticDuck } from "react-icons/gi";
import ComponentLoadingSpinner from "./ComponentLoadingSpinner";

import styles from "../styles/Dashboard.module.css";

export default function DashboardStatsCard(props) {
  return (
    <section className={`${styles.statsCard}`}>
      {props.leaderboardRank ? (
        <>
          <h2 className={`${styles.statsCard__title}`}>My Stats</h2>
          <div
            className={`${styles.statsCard__item} ${styles.statsCard__item__leaderboard}`}
          >
            <TbAward size={30} className={`${styles.statsCard__logo}`} />
            <div className={`${styles.statsCard__item__desc}`}>
              <span className={`${styles.statsCard__data}`}>
                {props.leaderboardRank}&nbsp;
              </span>
              <span>&#40;{props.totalPoints} pts&#41;</span>
            </div>
          </div>
          <div
            className={`${styles.statsCard__item} ${styles.statsCard__item__points}`}
          >
            <TbCalendarMonth
              size={30}
              className={`${styles.statsCard__logo}`}
            />
            <div className={`${styles.statsCard__item__desc}`}>
              <span className={`${styles.statsCard__data}`}>
                {props.monthlyPoints}pts&nbsp;
              </span>
              <span>this month</span>
            </div>
          </div>
          <div>
            <div
              className={`${styles.statsCard__item} ${styles.statsCard__item__tickets}`}
            >
              <GiPlasticDuck
                size={30}
                className={`${styles.statsCard__logo}`}
              />
              <div className={`${styles.statsCard__item__desc}`}>
                <span className={`${styles.statsCard__data}`}>
                  {props.tickets}&nbsp;
                </span>
                <span>tickets</span>
              </div>
              <div className={`${styles.statsCard__logo__gift}`}>
                <TbGift size={20} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <ComponentLoadingSpinner />
      )}
    </section>
  );
}
