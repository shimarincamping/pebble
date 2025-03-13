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
                        {props.btnIndex !== 0 ? (
                            <>
                                <button>
                                    <MdOutlineCancel
                                        size={20}
                                        onClick={props.deleteRoadmapSectionBtn}
                                    />
                                </button>
                            </>
                        ) : null}
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Title: </label>
                        <input
                            id="buttonTitle"
                            type="text"
                            name="buttonTitle"
                            placeholder="Add button title..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonTitle",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Difficulty: </label>
                        <input
                            id="buttonDifficulty"
                            type="text"
                            name="buttonDifficulty"
                            placeholder="Add button difficulty..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonDifficulty",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Duration: </label>
                        <input
                            id="buttonDuration"
                            type="text"
                            name="buttonDuration"
                            placeholder="Add button duration..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonDuration",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Description: </label>
                        <input
                            id="buttonDescription"
                            type="text"
                            name="buttonDescription"
                            placeholder="Add button description..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonDescription",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Image Link: </label>
                        <input
                            id="buttonImage"
                            type="text"
                            name="buttonImage"
                            placeholder="Add button image link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonImage",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Resource Link: </label>
                        <input
                            id="buttonLink"
                            type="url"
                            name="buttonLink"
                            placeholder="Add button resource link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonLink",
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
                        {props.btnIndex !== 0 ? (
                            <>
                                <button>
                                    <MdOutlineCancel
                                        size={20}
                                        onClick={props.deleteRoadmapSectionBtn}
                                    />
                                </button>
                            </>
                        ) : null}
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Title: </label>
                        <input
                            id="buttonTitle"
                            type="text"
                            name="buttonTitle"
                            placeholder="Add button title..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonTitle",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Resource Link: </label>
                        <input
                            id="buttonLink"
                            type="url"
                            name="buttonLink"
                            placeholder="Add button resource link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonLink",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Image Link: </label>
                        <input
                            id="buttonImage"
                            type="text"
                            name="buttonImage"
                            placeholder="Add button image link..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonImage",
                                    e.target.value
                                )
                            }
                        ></input>
                    </div>
                    <div className={`${styles.createThread__input}`}>
                        <label>Author Name: </label>
                        <input
                            id="buttonAuthor"
                            type="text"
                            name="buttonAuthor"
                            placeholder="Add button author..."
                            onChange={(e) =>
                                props.onSectionInputBtnChange(
                                    props.sectionIndex,
                                    props.btnIndex,
                                    "buttonAuthor",
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
