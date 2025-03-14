import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import styles from "../styles/EditProfileForm.module.css";

const EditProfileFormContainer = ({ id, initialData, onClose, onSave }) => { // ✅ Accept `id` as a prop
    const token = localStorage.getItem("jwtToken");
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

        if (!id) {
            console.error("User ID is undefined. Cannot proceed with update.");
            return;
        }

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${id}`,  // ✅ Use `id` from props
                {
                    method: "PUT",
                    body: JSON.stringify({
                        ...formData,
                        profilePicture,
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

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
