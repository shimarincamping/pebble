import React from "react";
import styles from "../styles/EditProfileForm.module.css";

const EditProfileForm = ({
    formData,
    handleChange,
    handleSubmit,
    closeForm,
    handleImageUpload,
}) => {
    return (
        <div className={styles.formContainer}>
            {/* Close Button */}
            <button className={styles.closeButton} onClick={closeForm}>
                ✖
            </button>

            {/* Title */}
            <h2>Edit Profile</h2>
            <hr />

            <p className={styles.requiredNote}>
                <span className={styles.requiredAsterisk}>*</span> Indicates
                Required
            </p>

            <form onSubmit={handleSubmit} className={styles.submitProfileForm}>
                {/* Full Name */}
                <label>
                    Full Name <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Headline Bio */}
                <label>
                    Headline Bio{" "}
                    <span className={styles.requiredAsterisk}>*</span>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Course & Year (Aligned) */}
                <div className={styles.row}>
                    <label className={styles.halfWidth}>
                        Course{" "}
                        <span className={styles.requiredAsterisk}>*</span>
                        <input
                            type="text"
                            name="courseName"
                            value={formData.courseName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.halfWidth}>
                        Year <span className={styles.requiredAsterisk}>*</span>
                        <input
                            type="number"
                            name="currentYear"
                            value={formData.currentYear}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                {/* Email, Phone, Discord */}
                <label>
                    Email <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled
                    />
                </label>

                <label>
                    Phone <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Discord <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="text"
                        name="discordUsername"
                        value={formData.discordUsername}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Upload Profile Picture */}
                <label>
                    Profile Picture{" "}
                    <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </label>

                <hr />

                {/* Save Button (Centered) */}
                <div className={styles.buttonContainer}>
                    <button type="submit">SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
