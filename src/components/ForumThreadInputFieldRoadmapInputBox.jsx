import React from "react";
import styles from "../styles/Forum.module.css";

export default function ForumThreadInputFieldRoadmapInputBox(props) {
    return (
        <div className={`${styles.roadmapInputBox__container}`}>
            <div className={`${styles.roadmapInputBox__inputDiv}`}>
                <label>Roadmap Button Type: </label>
                <select
                    name="roadmapBtnType"
                    id="roadmapBtnType"
                    onChange={props.handleThreadType}
                >
                    <option value="roadmapBtnCourses">Courses</option>
                    <option value="roadmapBtnProjects">Projects</option>
                    <option value="roadmapBtnCompetitions">Competitions</option>
                </select>
            </div>
            {props.roadmapBtnType === "roadmapBtnProjects" ? (
                <>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Title: </label>
                        <input
                            id="roadmapBtnTitle"
                            type="text"
                            name="roadmapBtnTitle"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Difficulty: </label>
                        <input
                            id="roadmapBtnDifficulty"
                            type="text"
                            name="roadmapBtnDifficulty"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Duration &#40;Weeks&#41;: </label>
                        <input
                            id="roadmapBtnDuration"
                            type="text"
                            name="roadmapBtnDuration"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Resource Link: </label>
                        <input
                            id="roadmapBtnResourceLink"
                            type="url"
                            name="roadmapBtnResourceLink"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Image Link: </label>
                        <input
                            id="roadmapBtnImageLink"
                            type="text"
                            name="roadmapBtnImageLink"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Author Name: </label>
                        <input
                            id="roadmapBtnAuthor"
                            type="text"
                            name="roadmapBtnAuthor"
                            onChange={props.onChange}
                        ></input>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Title: </label>
                        <input
                            id="roadmapBtnTitle"
                            type="text"
                            name="roadmapBtnTitle"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Resource Link: </label>
                        <input
                            id="roadmapBtnResourceLink"
                            type="url"
                            name="roadmapBtnResourceLink"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Image Link: </label>
                        <input
                            id="roadmapBtnImageLink"
                            type="text"
                            name="roadmapBtnImageLink"
                            onChange={props.onChange}
                        ></input>
                    </div>
                    <div className={`${styles.roadmapInputBox__inputDiv}`}>
                        <label>Author Name: </label>
                        <input
                            id="roadmapBtnAuthor"
                            type="text"
                            name="roadmapBtnAuthor"
                            onChange={props.onChange}
                        ></input>
                    </div>
                </>
            )}

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
