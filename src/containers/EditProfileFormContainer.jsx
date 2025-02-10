import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import styles from "../styles/EditProfileForm.module.css";

const EditProfileFormContainer = ({ initialData, onClose, onSave }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, profilePicture });
        onClose();
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
