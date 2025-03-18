import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import styles from "../styles/EditProfileForm.module.css";

const EditProfileFormContainer = ({ id, initialData, onClose, onSave }) => {
    // ✅ Accept `id` as a prop
    const token = localStorage.getItem("jwtToken");
    const [formData, setFormData] = useState(initialData);
    const [profilePictureFile, setProfilePictureFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setProfilePictureFile({ profilePictureFileInput: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            console.error("User ID is undefined. Cannot proceed with update.");
            return;
        }

        const formDataSubmit = new FormData();
        formDataSubmit.append("fullName", formData.fullName);
        formDataSubmit.append("courseName", formData.courseName);
        formDataSubmit.append("currentYear", formData.currentYear);
        formDataSubmit.append("about", formData.about);
        formDataSubmit.append("phoneNumber", formData.phoneNumber);
        formDataSubmit.append("discordUsername", formData.discordUsername);

        if (profilePictureFile?.profilePictureFileInput) {
            console.log(
                "Appending file:",
                profilePictureFile?.profilePictureFileInput
            ); // Debugging output
            formDataSubmit.append(
                "file",
                profilePictureFile?.profilePictureFileInput
            );
        }

        for (let pair of formDataSubmit.entries()) {
            console.log(pair[0], pair[1]); // Ensure file is included
        }

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${id}`, // ✅ Use `id` from props
                {
                    method: "PUT",
                    body: formDataSubmit,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                alert("Failed to update profile.");
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
