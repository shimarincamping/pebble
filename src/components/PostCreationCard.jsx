import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "../styles/PostCreationCard.module.css"


function PostCreationCard() {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
    const options = ["One", "Two", "Three"];

    return (
        <div className={styles.postCreationCard}>
            <div className={styles.postHeading}>
                <div>
                    <img 
                        src="/img/profilePictureBorder.png"
                        className={styles.profilePictureBorder}
                    />
                </div>
                <div className={styles.postType}>
                    <h5>Post Type</h5>
                    <div className={styles.postTypeBtn} onClick={() =>
                        setIsActive(!isActive)}>
                        <p>{!selected ? "Select one...": selected}</p>
                        <BsChevronDown/>
                    </div>
                    {isActive && (
                        <div className={styles.postTypeContent}>
                            {options.map((option) => (
                                <div className={styles.postTypeItem} onClick={() => {
                                    setSelected(option);
                                    setIsActive(false);
                                }} >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.postModule}>
                    <p>Module</p>
                </div>
            </div>
            <div className={styles.titlePost}>
                <input type="text" placeholder="Post Title"/>
            </div>
            <div className={styles.writePost}>
                <input type="text" placeholder="Write A New Post!"/>
            </div>
        </div>
    );
}

export default PostCreationCard;