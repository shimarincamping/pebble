import React from 'react';
import styles from "../styles/ProfilePage.module.css";
import PostCardContainer from "../containers/PostCardContainer";
import ComponentLoadingSpinner from './ComponentLoadingSpinner';

function ProfilePageAllPostsList(props) {
    return (
        <div class={`${styles.viewAllPostsOverlayCard}`}>
            <h1>All Posts</h1>
            <img 
                src="/icons/exit_black.png"
                onClick={props.toggleFormOverlay}
            />
            <hr />
            <div class={`${styles.viewAllPostsOverlayCard__feed}`}>
                { 
                    (props.postList) ? (
                        <section>
                            <PostCardContainer postCardData={props.postList}/>
                        </section>
                    ) : (<ComponentLoadingSpinner />)
                }
            </div>

        </div>
    );
}

export default ProfilePageAllPostsList;