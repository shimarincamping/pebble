import React from 'react';
import styles from "../styles/ProfilePage.module.css";

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
                    (props.postList).map((post) => (
                        /* Initialise a post component here */
                        <h3>{post.title}</h3>
                        /* Initialise a post component here */
                    ))
                }
            </div>

        </div>
    );
}

export default ProfilePageAllPostsList;