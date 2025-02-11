import React from "react";
import styles from "../styles/Forum.module.css";

export default function ForumThreadInputFieldRoadmapInputBox(props) {
    return (
        <div className={`${styles.roadmapInputBox__container}`}>
            <div className={`${styles.roadmapInputBox__inputDiv}`}>
                <label>Insert Image: </label>
                <input
                    id="roadmapBtnImage"
                    type="file"
                    alt="Choose file button"
                ></input>
            </div>
            <div className={`${styles.roadmapInputBox__inputDiv}`}>
                <label>Insert Title: </label>
                <input
                    id="roadmapBtnTitle"
                    type="text"
                    name="roadmapBtnTitle"
                    onChange={props.onChange}
                ></input>
            </div>
            <div className={`${styles.roadmapInputBox__inputDiv}`}>
                <label>Insert Description: </label>
                <input
                    id="roadmapBtnDescription"
                    type="text"
                    name="roadmapBtnDescription"
                    onChange={props.onChange}
                ></input>
            </div>
            <div className={`${styles.roadmapInputBox__inputDiv}`}>
                <label>Insert Link: </label>
                <input
                    id="roadmapBtnLink"
                    type="url"
                    name="roadmapBtnLink"
                    onChange={props.onChange}
                ></input>
            </div>
            <div className={`${styles.roadmapInputBox__inputButtons}`}>
                <button
                    type="submit"
                    value="Cancel"
                    onClick={props.roadmapInputBoxDisable}
                >
                    Cancel
                </button>
                <button type="submit" onClick={props.onSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
