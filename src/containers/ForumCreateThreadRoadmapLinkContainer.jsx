import React, { useState } from "react";
import ForumThreadInputFieldRoadmap from "../components/ForumThreadInputFieldRoadmap";
import ForumThreadInputFieldRoadmapInputBox from "../components/ForumThreadInputFieldRoadmapInputBox";

export default function ForumCreateThreadRoadmapLinkContainer(props) {
    const [clickedOnRoadmap, setClickedOnRoadmap] = useState(false);
    const [roadmapBtnData, setRoadmapBtnData] = useState({
        roadmapBtnTitle: "",
        roadmapBtnDescription: "",
        roadmapBtnLink: "",
    });

    const handleClickRoadmapBtn = () => {
        setClickedOnRoadmap(true);
    };

    const handleDisableRoadmapBtn = () => {
        setClickedOnRoadmap(false);
    };

    const sendToInputBox = (info) => {
        console.log(info);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRoadmapBtnData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        console.log(roadmapBtnData);
    };

    return (
        <ForumThreadInputFieldRoadmap
            roadmapInputBoxActive={handleClickRoadmapBtn}
            addRoadmapInputBox={
                clickedOnRoadmap && (
                    <ForumThreadInputFieldRoadmapInputBox
                        onSubmit={handleSubmit}
                        onChange={handleInputChange}
                        roadmapInputBoxDisable={handleDisableRoadmapBtn}
                        clickAndSendToInputBox={sendToInputBox}
                    />
                )
            }
        />
    );
}
