import React from "react";
import GeneratedCVDisplay from "../components/GeneratedCVDisplay";

const GeneratedCVDisplayContainer = ({ data }) => {
    if (!data) {
        return <p>No CV data available.</p>;
    }

    return (
        <div>
            <GeneratedCVDisplay formData={data} />
        </div>
    );
};

export default GeneratedCVDisplayContainer;
