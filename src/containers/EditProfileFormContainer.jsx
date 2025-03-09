import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import styles from "../styles/EditProfileForm.module.css";
import { useAuth } from "../containers/AuthProvider";


const EditProfileFormContainer = ({ initialData, onClose, onSave }) => {
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const [formData, setFormData] = useState(initialData);
    const [profilePicture, setProfilePicture] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const currentRequestID = await user;; // ID set by authentication middleware

            await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...formData, 
                    profilePicture
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });

            onSave(formData);
            onClose();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className={styles.overlay}>
            <EditProfileForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleImageUpload={handleImageUpload} 
                closeForm={onClose} 
            />
        </div>
    );
};

export default EditProfileFormContainer;
