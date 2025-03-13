import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";

export default function RoadmapPostInputHeader({ 
    roadmapThreadData, 
    handleInputChange, 
    handleSubmit, 
    roadmapThreadDescription, 
    roadmapThreadSection,
    onClose
}) {
    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            handleSubmit(e); 
        }}>
            <section className={styles.createThread__section}>
                <div className={styles.createThread__header}>
                    <h2>Edit Roadmap</h2>
                    <div className={styles.createThread__header}>
                        <button onClick={onClose}>
                            <MdOutlineCancel size={30} />
                        </button>
                    </div>
                </div>
                <div className={styles.createThread__inputDiv}>
                    <div className={styles.createThread__input}>
                        <label htmlFor="roadmapThreadTitle">Roadmap Post Title</label>
                        <input
                            type="text"
                            name="roadmapThreadTitle"
                            placeholder="Add a post title..."
                            value={roadmapThreadData.roadmapThreadTitle || ""}
                            onChange={(e) => handleInputChange("roadmapThreadTitle", e.target.value)}
                        />
                    </div>
                    <div className={styles.createThread__input}>
                        <label htmlFor="roadmapThreadAuthor">Roadmap Author</label>
                        <input
                            type="text"
                            name="roadmapThreadAuthor"
                            placeholder="Add a roadmap author..."
                            value={roadmapThreadData.roadmapThreadAuthor || ""}
                            onChange={(e) => handleInputChange("roadmapThreadAuthor", e.target.value)}
                        />
                    </div>
                    <div className={styles.createThread__input}>
                        <label htmlFor="roadmapProfileImageLink">Roadmap Profile Image Link</label>
                        <input
                            type="text"
                            name="roadmapProfileImageLink"
                            placeholder="Add a profile image link..."
                            value={roadmapThreadData.roadmapProfileImageLink || ""}
                            onChange={(e) => handleInputChange("roadmapProfileImageLink", e.target.value)}
                        />
                    </div>
                    <div className={styles.createThread__input}>
                        <label htmlFor="roadmapBannerImageLink">Roadmap Banner Image Link</label>
                        <input
                            type="text"
                            name="roadmapBannerImageLink"
                            placeholder="Add a banner image link..."
                            value={roadmapThreadData.roadmapBannerImageLink || ""}
                            onChange={(e) => handleInputChange("roadmapBannerImageLink", e.target.value)}
                        />
                    </div>
                </div>

                {/* Render the mapped description components */}
                {roadmapThreadDescription}

                {/* Render the mapped section components */}
                {roadmapThreadSection}

                <div className={styles.createThread__submit}>
                    <button type="submit">Update Roadmap</button>
                </div>
            </section>
        </form>
    );
}
