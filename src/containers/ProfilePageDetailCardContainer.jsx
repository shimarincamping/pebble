import React, {useState, useEffect} from "react";

import ApplicationMainOverlay from './ApplicationMainOverlay';
import ProfilePageDetailCardItem from "../components/ProfilePageDetailCardItem";
import ProfilePageDetailEditForm from "../components/ProfilePageDetailEditForm";

import styles from "../styles/ProfilePage.module.css";


function ProfilePageDetailCardContainer(props) {

    const [editDetailsFormData, setEditDetailsFormData] = useState(props.data);
    const [isEditDetailsOverlayVisible, setEditDetailsOverlayVisible] = useState(false);

    useEffect(() => {
        setEditDetailsFormData(props.data);
    }, [props.data]);

    // ---- Helper functions ------

    function addProfileDetailEntry() {
        setEditDetailsFormData((prev) => [...prev, {
            icon : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png", // default icon
            heading : "",
            subheading : "",
            description : ""
        }]);
    }

    function editProfileDetail(index, field, newEntry) {
        setEditDetailsFormData((prev) => prev.map((item, i) => i === index ? {...item, [field] : newEntry} : item));
    }

    function removeProfileDetail(index) {
        setEditDetailsFormData((prev) => prev.filter((_, i) => i !== index));
    }

    // ---- Helper functions ------

    function toggleFormOverlay() {
        setEditDetailsOverlayVisible((prev) => !prev);
    }

    function handleFormSubmit() {
        props.handleNewDetails(props.dataKey, editDetailsFormData);
        toggleFormOverlay();
    }


    return (
        <>
            <div className={`${styles.profilePageCard} ${styles.profileDetailCard}`}>
                <h1>{props.title}</h1>
                {props.isEditable && (
                    <img 
                        src="/icons/edit_black.png"
                        onClick={toggleFormOverlay}
                    />
                )}

                {
                    (props.data.length > 0) ? (
                        (props.data.map((_, i) => (
                            <>
                                <ProfilePageDetailCardItem 
                                    {...props.data[i]}
                                />
                            </>
                        )))
                    ) : (
                        <h3>No {props.title} Found...</h3>
                    )
                }
            </div>

            {isEditDetailsOverlayVisible && (
                <ApplicationMainOverlay>
                    <ProfilePageDetailEditForm 
                        dataKey={props.dataKey}
                        title={props.title}
                        data={editDetailsFormData}
                        toggleFormOverlay={toggleFormOverlay}
                        addProfileDetailEntry={addProfileDetailEntry}
                        editProfileDetail={editProfileDetail}
                        removeProfileDetail={removeProfileDetail}
                        handleFormSubmit={handleFormSubmit}
                    />
                </ApplicationMainOverlay>
            )}
        </>
    );
}

export default ProfilePageDetailCardContainer;