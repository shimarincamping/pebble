import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import ApplicationMainOverlay from './ApplicationMainOverlay';
import ProfilePageAllPostsList from "../components/ProfilePageAllPostsList";
import PostCardContainer from "./PostCardContainer";
import styles from "../styles/ProfilePage.module.css";

function ProfilePagePostsCardContainer(props) {

    const [isViewAllPostsOverlayVisible, setIsViewAllPostsOverlayVisible] = useState(false);

    function toggleFormOverlay() {
        setIsViewAllPostsOverlayVisible((prev) => !prev);
    }

    return(
        <>
            <div className={`${styles.profilePageCard} ${styles.profilePostsCard}`}>
                <h1>Latest Posts</h1>
                {props.showPostButton && <Link to="/feed"><button>Create a Post</button></Link>}

                {(props.latestPost) ? (
                <section>
                    <PostCardContainer 
                        postCardData={[props.latestPost]} 
                    />
                </section>
                ) : ( <h3>This user has no posts.</h3> )}

                <hr />
                <h4 onClick={() => {toggleFormOverlay(); props.getAllPosts();}}>Show All Posts ➜</h4>
            </div>

            {isViewAllPostsOverlayVisible && (
                <ApplicationMainOverlay>
                    <ProfilePageAllPostsList
                        postList={props.allPosts}
                        toggleFormOverlay={toggleFormOverlay}
                    />
                </ApplicationMainOverlay>
            )}
        </>
    );
}

export default ProfilePagePostsCardContainer;