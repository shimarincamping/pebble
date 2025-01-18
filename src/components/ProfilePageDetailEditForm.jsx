import React from 'react';
import styles from "../styles/ProfilePage.module.css";

function ProfilePageDetailEditForm(props) {

    return(
        <div class={`${styles.editProfileDetailOverlayCard}`}>
            <h1>Edit {props.title}</h1>
            <img 
                src="/icons/exit_black.png"
                onClick={props.toggleFormOverlay}
            />
            <hr />
            <div class={`${styles.editProfileDetailOverlayCard__formBody}`}>
                {
                    (props.data).map((entry, index) => (
                        <>
                            <h3>{props.title} #{index+1}</h3>

                            <button onClick={() => props.removeProfileDetail(index)} 
                                    className={`${styles.editProfileDetailOverlayCard__formBody__deleteButton}`}>
                                Delete
                            </button> <br/>

                            {/* I decided against making these another component as it would likely
                            not result in a significant reduction / improvement to the code */}

                            {/* First field: Icon URL */}
                            <label htmlFor={`${props.dataKey}-entry${index}-icon`}>Icon Picture</label> <br />
                            <input 
                                value={entry.icon}
                                id={`${props.dataKey}-entry${index}-icon`}
                                onChange={(e) => props.editProfileDetail(index, "icon", e.target.value)}
                                placeholder="Enter a valid URL to an image..."
                            /> <br />

                            {/* Second field: Heading */}
                            <label htmlFor={`${props.dataKey}-entry${index}-heading`}>Heading</label> <br />
                            <input 
                                value={entry.heading}
                                id={`${props.dataKey}-entry${index}-heading`}
                                onChange={(e) => props.editProfileDetail(index, "heading", e.target.value)}
                                placeholder="Enter a suitable title..."
                            /> <br />

                            {/* Third field: Subheading */}
                            <label htmlFor={`${props.dataKey}-entry${index}-subheading`}>Subheading</label> <br />
                            <input 
                                value={entry.subheading}
                                id={`${props.dataKey}-entry${index}-subheading`}
                                onChange={(e) => props.editProfileDetail(index, "subheading", e.target.value)}
                                placeholder="Write about some important details (location, dates, organisations, platforms)..."
                            /> <br />

                            {/* Fourth field: Description */}
                            <label htmlFor={`${props.dataKey}-entry${index}-description`}>Description</label> <br />
                            <textarea 
                                value={entry.description}
                                id={`${props.dataKey}-entry${index}-description`}
                                onChange={(e) => props.editProfileDetail(index, "description", e.target.value)}
                                placeholder="Describe your experience and what you learnt..."
                            /> <br />

                            <hr />
                        </>
                    ))
                }
            </div>

            <footer>
                <button onClick={props.addProfileDetailEntry}
                        className={`${styles.editProfileDetailOverlayCard__formBody__addButton}`}>
                    Add new
                </button>

                <button onClick={props.handleFormSubmit}
                        className={`${styles.editProfileDetailOverlayCard__formBody__saveButton}`}>
                    Save
                </button>
            </footer>
    
        </div>
    );
}

export default ProfilePageDetailEditForm;