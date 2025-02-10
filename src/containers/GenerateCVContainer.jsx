import React, { useState } from "react";
import GenerateCV from "../components/GenerateCV";
import styles from "../styles/GenerateCV.module.css";

const GenerateCVContainer = ({ initialData, onClose, onGenerate }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            if (["skills", "languages"].includes(name)) {
                return { ...prev, [name]: value.split(",").map(item => item.trim()) };
            }

            if (["workExperience", "education", "certifications", "projects", "awards"].includes(name)) {
                return {
                    ...prev,
                    [name]: value.split("\n").map(item => {
                        const [title, description] = item.split(" - ");
                        return { title: title?.trim(), description: description?.trim() };
                    })
                };
            }

            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(formData);  // Pass data to parent (CVContainer)
    };
    
    return (
        <div className={styles.overlay}>
            <GenerateCV 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                closeForm={onClose} 
            />
        </div>
    );
};

export default GenerateCVContainer;
