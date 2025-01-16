import React from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebarCardContactLine from './ProfileSidebarCardContactLine';
import ComponentLoadingSpinner from './ComponentLoadingSpinner';

import styles from "../styles/Sidebar.module.css";

function ProfileSidebarCard(props) {
    return (
        <section className={`${styles.sidebarCard}`}>
            <img 
                src="/img/taylorsDefaultProfileBanner.png" 
                className={`${styles.profileSidebarCard__bannerImage}`}
                alt="Profile Banner"
            />
            {
                (Object.keys(props).length) ? (
                    <>
                        <img 
                            src="/img/profilePictureBorder.png"
                            className={`${styles.profileSidebarCard__profilePictureBorder}`}
                        /> <br />
                        <img 
                            src={props.pictureURL}
                            className={`${styles.profileSidebarCard__profilePicture}`}
                            alt="Profile picture"
                        /> <br />

                        <div className={`${styles.profileSidebarCard__mainBody}`}>
                            <div className={`${styles.profileSidebarCard__mainBody__userHeader}`}>
                                <h1>{(props.name).toUpperCase()}</h1>
                                <p>{props.subline1}</p>
                                <p>{props.subline2}</p>
                            </div> <br />

                            <div className={`${styles.profileSidebarCard__mainBody__editButtonContainer}`}>
                                <hr />
                                <Link to="/profile">
                                    <button>
                                        <span>Edit Profile</span>
                                        <img src="/icons/edit_white.png"></img>
                                    </button>
                                </Link>
                            </div>

                            <div className={`${styles.profileSidebarCard__mainBody__additionalInformation}`}>
                                <h5>About Me</h5>
                                <p>{props.about}</p>

                                <h5>Contact Information</h5>

                                {/* The assumption is all accounts have an email... */}
                                <ProfileSidebarCardContactLine 
                                    src="/icons/email_black.png"
                                    alt="Email Address"
                                    text={props.email}
                                /> <br />

                                {/* ... and other contact information may return null */}
                                {props.phone && (
                                    <>
                                        <ProfileSidebarCardContactLine 
                                            src="/icons/phone_black.png"
                                            alt="Phone Number" 
                                            text={props.phone}
                                        /> <br />
                                    </>
                                )}
                                {props.discord && (
                                    <>
                                        <ProfileSidebarCardContactLine 
                                            src="/icons/discord_black.png"
                                            alt="Discord Username" 
                                            text={`@${props.discord}`}
                                        /> <br />
                                    </> 
                                )} 
                            </div>
                        </div>
                    </>
                ) : (
                    <ComponentLoadingSpinner />
                )
            }
        </section>
    );
}

export default ProfileSidebarCard;