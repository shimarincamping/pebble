import React from "react";
import styles from "../styles/Forum.module.css";
import { BiPlusCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export default function ForumThreadInputFieldRoadmapSectionButton({
    section,
    sectionIndex,
    btnIndex,
    onSectionInputBtnChange,
    addRoadmapThreadSectionBtn,
    removeRoadmapThreadSectionBtn,
    btn,
}) {

    return (
        <div className={`${styles.createThread__inputDiv} ${styles.createThread__container}`}>
            <div className={`${styles.createThread__inputDiv}`}>
                <div className={`${styles.createThread__input__title}`}>
                    Button {btnIndex + 1}
                    <button onClick={() => removeRoadmapThreadSectionBtn(sectionIndex, btnIndex)}>
                        <MdOutlineCancel size={20} />
                    </button>
                </div>

                <div className={`${styles.createThread__input}`}>
                    <label>Title:</label>
                    <input
                        type="text"
                        placeholder="Add button title..."
                        value={btn.buttonTitle || ""}
                        onChange={(e) =>
                            onSectionInputBtnChange(sectionIndex, btnIndex, "buttonTitle", e.target.value)
                        }
                    />
                </div>

                {section.roadmapSectionType === "roadmapSectionProjects" && (
                    <>
                        <div className={`${styles.createThread__input}`}>
                            <label>Difficulty:</label>
                            <input
                                type="text"
                                placeholder="Add button difficulty..."
                                value={btn.buttonDifficulty || ""}
                                onChange={(e) =>
                                    onSectionInputBtnChange(sectionIndex, btnIndex, "buttonDifficulty", e.target.value)
                                }
                            />
                        </div>
                        <div className={`${styles.createThread__input}`}>
                            <label>Duration:</label>
                            <input
                                type="text"
                                placeholder="Add button duration..."
                                value={btn.buttonDuration || ""}
                                onChange={(e) =>
                                    onSectionInputBtnChange(sectionIndex, btnIndex, "buttonDuration", e.target.value)
                                }
                            />
                        </div>
                        <div className={`${styles.createThread__input}`}>
                            <label>Description:</label>
                            <input
                                type="text"
                                placeholder="Add button description..."
                                value={btn.buttonDescription || ""}
                                onChange={(e) =>
                                    onSectionInputBtnChange(sectionIndex, btnIndex, "buttonDescription", e.target.value)
                                }
                            />
                        </div>
                    </>
                )}

                <div className={`${styles.createThread__input}`}>
                    <label>Image Link:</label>
                    <input
                        type="text"
                        placeholder="Add button image link..."
                        value={btn.buttonImage || ""}
                        onChange={(e) =>
                            onSectionInputBtnChange(sectionIndex, btnIndex, "buttonImage", e.target.value)
                        }
                    />
                </div>
                <div className={`${styles.createThread__input}`}>
                    <label>Resource Link:</label>
                    <input
                        type="url"
                        placeholder="Add button resource link..."
                        value={btn.buttonLink || ""}
                        onChange={(e) =>
                            onSectionInputBtnChange(sectionIndex, btnIndex, "buttonLink", e.target.value)
                        }
                    />
                </div>

                {section.roadmapSectionType !== "roadmapSectionProjects" && (
                    <div className={`${styles.createThread__input}`}>
                        <label>Author Name:</label>
                        <input
                            type="text"
                            placeholder="Add button author..."
                            value={btn.buttonAuthor || ""}
                            onChange={(e) =>
                                onSectionInputBtnChange(sectionIndex, btnIndex, "buttonAuthor", e.target.value)
                            }
                        />
                    </div>
                )}

                <button
                    className={`${styles.createThread__button__addContent}`}
                    type="button"
                    onClick={() => addRoadmapThreadSectionBtn(sectionIndex)}
                >
                    <BiPlusCircle size={20} /> Add Roadmap Button
                </button>
            </div>
        </div>
    );
}
