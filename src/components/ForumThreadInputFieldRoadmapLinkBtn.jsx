import React from "react";
import { MdOutlineAddLink } from "react-icons/md";

export default function ForumThreadInputFieldRoadmapLinkBtn(props) {
    return (
        <>
            <button type="button">
                <MdOutlineAddLink size={20} />
                <span onClick={props.roadmapInputBoxActive}>
                    Add Roadmap Link
                </span>
            </button>
            {props.addRoadmapInputBox}
        </>
    );
}
