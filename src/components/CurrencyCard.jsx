import React from "react";

import styles from "../styles/Currency.module.css"

function CurrencyCard() {
    return (
        <section className={styles.currencyCard}>
            <div className={styles.ccMainBody}>
                <h5>Currency Card</h5>
                <p>Use points to get tickets and spin!</p>
                <hr/>
                <h5>Current Points: 600</h5>
                <p>Cost of each ticket: 100 points</p>
                <h5>Available Tickets: 6</h5>
            </div>
            <div className={styles.ccButton}>
                <div className={styles.ccButton1}>
                    <button>
                        <span>Goals</span>
                    </button>
                </div>
                <div>
                    <button>
                        <span>Buy Tickets</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CurrencyCard;