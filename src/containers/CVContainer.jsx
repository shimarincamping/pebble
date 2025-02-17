import React from "react";
import DisplayGeneratedCV from "../components/DisplayGeneratedCV";

const CVContainer = ({ data }) => {
    if (!data) {
        return <p>No CV data available.</p>;
    }

    return (
        <div>
            <DisplayGeneratedCV formData={data} />
        </div>
    );
};

export default CVContainer;
