import React from "react";
import { MdOutlineAddLink } from "react-icons/md";

export default function ForumThreadInputFieldRoadmap(props) {
    return (
        <>
            <button>
                <MdOutlineAddLink size={20} />
                <span onClick={props.roadmapInputBoxActive}>
                    Add Roadmap Link
                </span>
            </button>
            <div>{props.addRoadmapInputBox}</div>
        </>
    );
}
