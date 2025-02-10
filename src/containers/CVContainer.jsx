import React from "react";
import CV from "../components/CV";

const CVContainer = ({ data }) => {
    if (!data) {
        return <p>No CV data available.</p>;
    }

    return (
        <div>
            <CV formData={data} />
        </div>
    );
};

export default CVContainer;
