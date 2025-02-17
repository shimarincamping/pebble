import React, { useState } from "react";
import ForumThreadInputFieldRoadmapLinkBtn from "../components/ForumThreadInputFieldRoadmapLinkBtn";
import ForumThreadInputFieldRoadmapInputBox from "../components/ForumThreadInputFieldRoadmapInputBox";

export default function ForumCreateThreadRoadmapLinkContainer(props) {
    const [clickedOnRoadmap, setClickedOnRoadmap] = useState(false);
    const [roadmapBtnData, setRoadmapBtnData] = useState({
        roadmapBtnType: "roadmapBtnCourses",
        roadmapBtnTitle: "",
        roadmapBtnResourceLink: "",
        roadmapBtnImageLink: "",
        roadmapBtnAuthor: "",
        roadmapBtnDifficulty: "",
        roadmapBtnDuration: "",
    });

    const handleSelectThreadType = (event) => {
        setRoadmapBtnData((prev) => ({
            ...prev,
            roadmapBtnType: event.target.value,
        }));
    };

    const handleClickRoadmapBtn = () => {
        setClickedOnRoadmap(true);
    };

    const handleDisableRoadmapBtn = () => {
        setClickedOnRoadmap(false);
    };

    const sendToInputBox = (info) => {
        console.log(info);
    };

    const handleUpdate = () => {
        props.updateRoadmapBtnData(roadmapBtnData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setRoadmapBtnData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const roadmapBtnHandleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};
        handleUpdate();
    };

    return (
        <ForumThreadInputFieldRoadmapLinkBtn
            roadmapInputBoxActive={handleClickRoadmapBtn}
            addRoadmapInputBox={
                clickedOnRoadmap && (
                    <ForumThreadInputFieldRoadmapInputBox
                        onSubmit={roadmapBtnHandleSubmit}
                        onChange={handleInputChange}
                        roadmapInputBoxDisable={handleDisableRoadmapBtn}
                        clickAndSendToInputBox={sendToInputBox}
                        handleThreadType={handleSelectThreadType}
                        roadmapBtnType={roadmapBtnData.roadmapBtnType}
                    />
                )
            }
        />
    );
}
