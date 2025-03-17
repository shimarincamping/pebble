import React, { useState } from "react";
import GenerateCVForm from "../components/GenerateCVForm";
import ApplicationMainOverlay from "./ApplicationMainOverlay";

const GenerateCVFormContainer = ({ initialData, onClose, onGenerate }) => {
    const [formData, setFormData] = useState({
        jobDesc : ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(formData);  // Pass data to parent (CVContainer)
    };
    
    return (
        <ApplicationMainOverlay>
            <GenerateCVForm 
                formData={formData}
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                closeForm={onClose} 
            />
        </ApplicationMainOverlay>
    );
};

export default GenerateCVFormContainer;
