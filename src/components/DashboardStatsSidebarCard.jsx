import React from "react";
import { TbAward, TbCalendarMonth, TbGift } from "react-icons/tb";
import { GiPlasticDuck } from "react-icons/gi";

import styles from "../styles/Sidebar.module.css";

export default function DashboardStatsSidebarCard(props) {
    return (
        <section>
            <div className={`${styles.statsSidebarCard}`}>
                <h2 className={`${styles.statsSidebarCard__title}`}>
                    My Stats
                </h2>
                <div
                    className={`${styles.statsSidebarCard__item} ${styles.statsSidebarCard__item__leaderboard}`}
                >
                    <TbAward
                        size={30}
                        className={`${styles.statsSidebarCard__logo}`}
                    />
                    <div className={`${styles.statsSidebarCard__item__desc}`}>
                        <span className={`${styles.statsSidebarCard__data}`}>
                            #{props.leaderboardRank}&nbsp;
                        </span>
                        <span>&#40;{props.totalPoints} pts&#41;</span>
                    </div>
                </div>
                <div
                    className={`${styles.statsSidebarCard__item} ${styles.statsSidebarCard__item__points}`}
                >
                    <TbCalendarMonth
                        size={30}
                        className={`${styles.statsCard__logo}`}
                    />
                    <div className={`${styles.statsSidebarCard__item__desc}`}>
                        <span className={`${styles.statsSidebarCard__data}`}>
                            {props.totalPoints}pts
                        </span>
                    </div>
                </div>
                <div>
                    <div
                        className={`${styles.statsSidebarCard__item} ${styles.statsSidebarCard__item__tickets}`}
                    >
                        <GiPlasticDuck
                            size={30}
                            className={`${styles.statsSidebarCard__logo}`}
                        />
                        <div
                            className={`${styles.statsSidebarCard__item__desc}`}
                        >
                            <span
                                className={`${styles.statsSidebarCard__data}`}
                            >
                                {props.tickets}&nbsp;
                            </span>
                            <span>tickets</span>
                        </div>
                        <div
                            className={`${styles.statsSidebarCard__logo__gift}`}
                        >
                            <TbGift size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
