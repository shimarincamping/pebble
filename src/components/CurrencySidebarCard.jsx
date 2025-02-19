import React from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/Sidebar.module.css";

function CurrencySidebarCard({ data }) {
    {/* Do remember that this component needs a Container to pass it props later on~ */}
    return (
        <section>
            <div className={styles.currencySidebarCard}>
            <h5>Currency Card</h5>
                <p>Use points to get tickets and spin!</p>
                <hr />
                <h5>Current Points: {data.currentPoints}</h5>
                <p>Cost of each ticket: 100 points</p>
                <h5>Available Tickets: {data.availableTickets}</h5>
            </div>
            <div className={styles.currencySidebarCard__buttonRow}>
                <div className={styles.ccButton1}>
                <Link to ="/goals">
                    <button>
                        <span>Goals</span>
                    </button>
                </Link>
                </div>
                <div className={styles.ccButton1}>
                <Link to ="/rewards">
                    <button>
                        <span>Rewards</span>
                    </button>
                </Link>
                </div>
            </div>
        </section>
    );
}

export default CurrencySidebarCard;