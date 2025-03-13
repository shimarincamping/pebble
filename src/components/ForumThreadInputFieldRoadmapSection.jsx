import React from "react";
import styles from "../styles/Forum.module.css";
import { BiPlusCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export default function ForumThreadInputFieldRoadmapSection(props) {
    return (
        <div
            className={`${styles.createThread__inputDiv} ${styles.createThread__container}`}
        >
            <div className={`${styles.createThread__input__title}`}>
                Section {props.index + 1}
                {props.index !== 0 ? (
                    <>
                        <button>
                            <MdOutlineCancel
                                size={20}
                                onClick={props.deleteRoadmapSection}
                            />
                        </button>
                    </>
                ) : null}
            </div>
            <div className={`${styles.createThread__input}`}>
                <label htmlFor="roadmapSectionType">Section Type:</label>
                <select
                    name="roadmapSectionType"
                    id="roadmapSectionType"
                    onChange={(e) =>
                        props.handleSelectSectionType(
                            props.index,
                            "roadmapSectionType",
                            e.target.value
                        )
                    }
                >
                    <option value="roadmapSectionCourses">Courses</option>
                    <option value="roadmapSectionProjects">Projects</option>
                    <option value="roadmapSectionCompetitions">
                        Competitions
                    </option>
                </select>
            </div>
            <div className={`${styles.createThread__input}`}>
                <label>Section Title: </label>
                <input
                    id="roadmapSectionTitle"
                    type="text"
                    name="roadmapSectionTitle"
                    placeholder="Add section title..."
                    onChange={(e) =>
                        props.onSectionInputChange(
                            props.index,
                            "roadmapSectionTitle",
                            e.target.value
                        )
                    }
                ></input>
            </div>
            <div className={`${styles.createThread__input}`}>
                <label>Section Description: </label>
                <input
                    id="roadmapSectionDescription"
                    type="text"
                    name="roadmapSectionDescription"
                    placeholder="Add section description..."
                    onChange={(e) =>
                        props.onSectionInputChange(
                            props.index,
                            "roadmapSectionDescription",
                            e.target.value
                        )
                    }
                ></input>
            </div>
            <div className={`${styles.createThread__inputDiv}`}>
                {props.threadSectionBtnInput}
            </div>
            <button
                className={`${styles.createThread__button__addContent}`}
                type="button"
                onClick={props.addRoadmapThreadSection}
            >
                <BiPlusCircle size={20} />
                Add Roadmap Thread Section
            </button>
        </div>
    );
}
