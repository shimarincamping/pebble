import React from 'react';
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
                    /> <br />
                    <img 
                        src={props.profilePicture}
                        className={`${styles.headerInfoCard__profilePicture}`}
                        alt="Profile picture"
                    />
                    <p className={`${styles.headerInfoCard__followerCount}`}>
                        {props.followerCount} Followers
                    </p>

                    {
                        (props.isMyProfile) ? (
                            <button 
                                onClick={props.toggleEditProfileFormVisible} 
                                className={`${styles.headerInfoCard__editProfileButton}`}>
                                    Edit Profile
                            </button>
                        ) : (props.isFollowingUser) ? (
                            <button 
                                onClick={props.toggleFollow} 
                                className={`${styles.headerInfoCard__unfollowButton}`}>
                                    Unfollow
                            </button>
                        ) : (
                            <button 
                                onClick={props.toggleFollow} 
                                className={`${styles.headerInfoCard__followButton}`}>
                                    Follow
                            </button>
                        )
                    }
                </section>
                <section className={`${styles.headerInfoCard__gridContainer__rightColumn}`}>
                    <h1>{props.fullName.toUpperCase()}</h1>
                    <p>
                        {(props.currentYear) ? `Year ${props.currentYear}, ${props.courseName}` : `${props.userType[0].toUpperCase() + props.userType.slice(1)}`}
                    </p>
                    <p>
                        {(props.about) ? (props.about) : "Hello world!"}
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ProfilePageHeaderInfoCard;