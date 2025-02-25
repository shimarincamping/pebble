import React from "react";
import styles from "../styles/Forum.module.css";
import { BiPlusCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export default function ForumThreadInputFieldRoadmapSectionButton(props) {
    return (
        <div
            className={`${styles.createThread__inputDiv}  ${styles.createThread__container}`}
        >
            {props.section.roadmapSectionType === "roadmapSectionProjects" ? (
                <div className={`${styles.createThread__inputDiv}`}>
                    <div className={`${styles.createThread__input__title}`}>
                        Button {props.btnIndex + 1}
                        <button>
                            <MdOutlineCancel size={20} />
                        </button>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Title: </label>
                        <input
                            id="roadmapBtnTitle"
                            type="text"
                            name="roadmapBtnTitle"
                            placeholder="Add button title..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnTitle",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Difficulty: </label>
                        <input
                            id="roadmapBtnDifficulty"
                            type="text"
                            name="roadmapBtnDifficulty"
                            placeholder="Add button difficulty..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnDifficulty",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Duration: </label>
                        <input
                            id="roadmapBtnDuration"
                            type="text"
                            name="roadmapBtnDuration"
                            placeholder="Add button duration..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnDuration",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Description: </label>
                        <input
                            id="roadmapBtnDescription"
                            type="text"
                            name="roadmapBtnDescription"
                            placeholder="Add button description..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnDescription",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Image Link: </label>
                        <input
                            id="roadmapBtnImageLink"
                            type="text"
                            name="roadmapBtnImageLink"
                            placeholder="Add button image link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnImageLink",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Resource Link: </label>
                        <input
                            id="roadmapBtnResourceLink"
                            type="url"
                            name="roadmapBtnResourceLink"
                            placeholder="Add button resource link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnResourceLink",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__inputDiv}`}>
                        {props.threadSectionBtnInput}
                        <button
                            className={`${styles.createThread__button__addContent}`}
                            type="button"
                            onClick={() =>
                                props.addRoadmapThreadSectionBtn(
                                    props.sectionIndex
                                )
                            }
                        >
                            <BiPlusCircle size={20} />
                            Add Roadmap Button
                        </button>
                    </div>
                </div>
            ) : (
                <div className={`${styles.createThread__inputDiv}`}>
                    <div className={`${styles.createThread__input__title}`}>
                        Button {props.btnIndex + 1}
                        <button>
                            <MdOutlineCancel size={20} />
                        </button>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Title: </label>
                        <input
                            id="roadmapBtnTitle"
                            type="text"
                            name="roadmapBtnTitle"
                            placeholder="Add button title..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnTitle",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Resource Link: </label>
                        <input
                            id="roadmapBtnResourceLink"
                            type="url"
                            name="roadmapBtnResourceLink"
                            placeholder="Add button resource link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnResourceLink",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Image Link: </label>
                        <input
                            id="roadmapBtnImageLink"
                            type="text"
                            name="roadmapBtnImageLink"
                            placeholder="Add button image link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnImageLink",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Author Name: </label>
                        <input
                            id="roadmapBtnAuthor"
                            type="text"
                            name="roadmapBtnAuthor"
                            placeholder="Add button author..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "roadmapBtnAuthor",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <button
                        className={`${styles.createThread__button__addContent}`}
                        type="button"
                        onClick={() =>
                            props.addRoadmapThreadSectionBtn(props.sectionIndex)
                        }
                    >
                        <BiPlusCircle size={20} />
                        Add Roadmap Button
                    </button>
                </div>
            )}
        </div>
    );
}
