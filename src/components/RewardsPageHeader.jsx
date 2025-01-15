import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/GoalsRewards.module.css';

function RewardsPageHeader(props) {
    return (
        <div className={`${styles.contentHeader}`}>
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
            </header> <hr />
        </div>
    );
}

export default RewardsPageHeader;