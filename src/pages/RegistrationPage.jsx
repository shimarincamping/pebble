import React from 'react';
import RegistrationFormContainer from '../containers/RegistrationFormContainer';
import { Link } from "react-router-dom";

import styles from "../styles/LoginRegistration.module.css"

function RegistrationPage() {
    return (
        <>
            <div className={`${styles.pageContainer}`}>
            </div>

            <main className={`${styles.sidebarContentsContainer}`}>
                <img 
                    src="img/pebbleLogo.png" 
                    className={`${styles.sidebarContentsContainer__appLogo}`} 
                    alt="PEBBLE logo"
                />
                <h1 className={`${styles.sidebarContentsContainer__formHeader}`}>
                    Register
                </h1>
                
                <RegistrationFormContainer />

                <div className={`${styles.sidebarContentsContainer__redirectLoginLink}`}>
                    <Link to="/login">
                        Already have an account? Log in!
                    </Link>
                </div>
            </main>
        </>

    );
}

export default RegistrationPage;