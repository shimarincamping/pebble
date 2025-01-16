import React from 'react';
import styles from "../styles/Sidebar.module.css";

function CVSidebarCard(props) {
    return (
        <section>
            <div class={`${styles.cvSidebarCard}`}>
                <h3>Resume/CV Builder</h3>
                {
                    (props.latestUserCV) ? (
                        <div class={`${styles.cvSidebarCard__viewCVTile}`}>
                            <img 
                                src='/img/cvPreviewImage.png'
                                alt='CV Preview'
                            /> <br />
                            <button onClick={props.handleView}>View CV</button>
                        </div>
                    ) : (
                        <h2>No CV to view...</h2>
                    )
                }
                <button className={`${styles.cvSidebarCard__generateCVButton}`} onClick={props.handleGenerate}>
                    Generate CV
                </button>
            </div>
        </section>
    );
}

export default CVSidebarCard;