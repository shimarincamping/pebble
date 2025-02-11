import React, { useState } from "react";
import ForumThreadInputField from "../components/ForumThreadInputField";
import ForumThreadInputFieldRoadmap from "../components/ForumThreadInputFieldRoadmap";
import ForumCreateThreadRoadmapLinkContainer from "./ForumCreateThreadRoadmapLinkContainer";

export default function ForumCreateThreadContainer(props) {
    const [threadData, setThreadData] = useState({
        threadType: "",
        threadTitle: "",
        threadDescription: "",
    });
    const [selectedThreadType, setSelectedThreadType] = useState("");
    const [showRoadmapLinkBtn, setShowRoadmapLinkBtn] = useState(false);

    const handleSelectThreadType = (event) => {
        setSelectedThreadType(event.target.value);
        if (event.target.value === "roadmapThread") {
            setShowRoadmapLinkBtn(true);
        } else {
            setShowRoadmapLinkBtn(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setThreadData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        console.log(threadData);
    };

    return (
        <ForumThreadInputField
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            clickBackButton={props.clickBackButton}
            onSelectChange={handleSelectThreadType}
            roadmapLinkButton={
                showRoadmapLinkBtn && <ForumCreateThreadRoadmapLinkContainer />
            }
        />
    );
}
