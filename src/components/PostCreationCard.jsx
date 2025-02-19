import React from "react";
import { BsImage } from "react-icons/bs";
import styles from "../styles/PostCreationCard.module.css";

function PostCreationCard({ postData, onPostTypeChange, onModuleChange, onPostTitleChange, onPostDescriptionChange, onImageUpload, onPostSubmit }) {
    return (
        <div className={styles.postCreationCard}>
            <div className={styles.postHeading}>
                <img 
                    src={postData.profilePicture}
                    className={styles.profilePicture}
                    alt="Profile"
                />
                
                {/* Post Type Selection */}
                <div className={styles.postType}>
                    <h5>Post Type</h5>
                    <select value={postData.postType} onChange={onPostTypeChange} className={styles.selectInput}>
                        <option value="">Select Type...</option>
                        <option value="Discussion">Discussion</option>
                        <option value="Question">Question</option>
                        <option value="Announcement">Announcement</option>
                    </select>
                </div>

                {/* Module Selection */}
                <div className={styles.postModule}>
                    <h5>Module</h5>
                    <select value={postData.module} onChange={onModuleChange} className={styles.selectInput}>
                        <option value="">Select Module...</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                    </select>
                </div>

                {/* Image Upload Button */}
                <label className={styles.imageUpload}>
                    <input type="file" accept="image/*" onChange={onImageUpload} hidden />
                    <BsImage size={35} color="grey" />
                </label>
            </div>

            {/* Post Title */}
            <div className={styles.titlePost}>
                <input
                    type="text"
                    placeholder="Post Title"
                    className={styles.inputField}
                    value={postData.title}
                    onChange={onPostTitleChange}
                />
            </div>

            {/* Post Content */}
            <div className={styles.writePost}>
                <textarea
                    placeholder="Write A New Post!"
                    className={styles.textareaField}
                    value={postData.postDesc}
                    onChange={onPostDescriptionChange}
                />
            </div>

            {/* Uploaded Image Preview */}
            {postData.uploadedImage && (
                <div className={styles.imagePreview}>
                    <img src={postData.uploadedImage} alt="Uploaded Preview" />
                </div>
            )}

            {/* Post Button */}
            <div className={styles.postItBtn} >
                <button onClick={onPostSubmit}>
                    <span>Post It</span>
                </button>
            </div>
        </div>
    );
}

export default PostCreationCard;