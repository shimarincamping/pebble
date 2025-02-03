import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import styles from "../styles/PostCreationCard.module.css"


function PostCreationCard() {
    const [isActivePostType, setIsActivePostType] = useState(false);
    const [isActivePostModule, setIsActivePostModule] = useState(false);
    const [selectedPostType, setSelectedPostType] = useState("");
    const [selectedPostModule, setSelectedPostModule] = useState("");
    const options1 = ["One", "Two", "Three"];
    const options2 = ["Hee", "Nee", "Tee"];

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
                        setIsActivePostType(!isActivePostType)}>
                        <p>{!selectedPostType ? "Select one...": selectedPostType}</p>
                        <BsChevronDown/>
                    </div>
                    {isActivePostType && (
                        <div className={styles.postTypeContent}>
                            {options1.map((option) => (
                                <div className={styles.postTypeItem} onClick={() => {
                                    setSelectedPostType(option);
                                    setIsActivePostType(false);
                                }} >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.postModule}>
                    <h5>Module</h5>
                    <div className={styles.postModuleBtn} onClick={() =>
                        setIsActivePostModule(!isActivePostModule)}>
                        <p>{!selectedPostModule ? "Select one...": selectedPostModule}</p>
                        <BsChevronDown/>
                    </div>
                    {isActivePostModule && (
                        <div className={styles.postModuleContent}>
                            {options2.map((option) => (
                                <div className={styles.postModuleItem} onClick={() => {
                                    setSelectedPostModule(option);
                                    setIsActivePostModule(false);
                                }} >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <BsImage size={25} color="grey" weight="light" className={styles.imageBtn}/>
            </div>
            <div className={styles.titlePost}>
                <input type="text" placeholder="Post Title"/>
            </div>
            <div className={styles.writePost}>
                <input type="text" placeholder="Write A New Post!"/>
            </div>
            <div className={styles.postItBtn}>
                <button>
                    <span>Post It</span>
                </button>
            </div>
        </div>
    );
}

export default PostCreationCard;
