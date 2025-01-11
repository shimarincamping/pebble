import React from 'react';
import RegistrationFormContainer from '../containers/RegistrationFormContainer';
import { Link } from "react-router-dom";

import styles from "../styles/LoginRegistration.module.css"

function RegistrationPage() {
    return (
        <>
            <div className={`${styles.pageContainer}`}>
            </div>

            <div className={`${styles.sidebarContentsContainer}`}>
                <img src="pebbleLogo.png" className={`${styles.sidebarContentsContainer__appLogo}`}/>
                <h1 className={`${styles.sidebarContentsContainer__formHeader}`}>Register</h1>
                <RegistrationFormContainer />

                <div className={`${styles.sidebarContentsContainer__redirectLoginLink}`}>
                    <Link to="/login">
                        Already have an account? Log in!
                    </Link>
                </div>
            </div>
        </>

    );
}

export default RegistrationPage;