import React from "react";
import styles from "../styles/ProfilePage.module.css";

function ProfilePageHeaderInfoCard(props) {
    return (
        <div className={`${styles.profilePageCard} ${styles.headerInfoCard}`}>
            <img 
                src="/img/taylorsDefaultProfileBanner.png" 
                className={`${styles.headerInfoCard__bannerImage}`}
                alt="Profile Banner"
            />
            <div className={`${styles.headerInfoCard__gridContainer}`}>
                <section className={`${styles.headerInfoCard__gridContainer__leftColumn}`}>
                    <img 
                        src="/img/profilePictureBorder.png"
                        className={`${styles.headerInfoCard__profilePictureBorder}`}
                        alt="Profile Pic Border"
                    /> 
                    <br />
                    <img 
                        src={props.profilePicture}
                        className={`${styles.headerInfoCard__profilePicture}`}
                        alt="Profile pic"
                    />
                    <p className={`${styles.headerInfoCard__followerCount}`}>
                        {props.followerCount} Followers
                    </p>

                    {props.isMyProfile ? (
                        <button 
                            onClick={props.toggleEditProfileFormVisible} 
                            className={`${styles.headerInfoCard__editProfileButton}`}
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <button 
                            onClick={props.toggleFollow} 
                            className={props.isFollowing ? styles.headerInfoCard__unfollowButton : styles.headerInfoCard__followButton}
                        >
                            {props.isFollowing ? "Unfollow" : "Follow"}
                        </button>
                    )}
                </section>
                <section className={`${styles.headerInfoCard__gridContainer__rightColumn}`}>
                    <h1>{props.fullName ? props.fullName.toUpperCase() : "User"}</h1>
                    <p>
                        {props.currentYear ? `Year ${props.currentYear}, ${props.courseName}` : props.userType ? `${props.userType.charAt(0).toUpperCase()}${props.userType.slice(1)}` : ""}
                    </p>
                    <p>{props.about || "Hello world!"}</p>
                </section>
            </div>
        </div>
    );
}

export default ProfilePageHeaderInfoCard;
