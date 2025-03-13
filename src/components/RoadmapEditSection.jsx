import React from "react";
import styles from "../styles/Forum.module.css";
import { BiPlusCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export default function RoadmapEditSection({
    index,
    section,
    handleSelectSectionType,
    onSectionInputChange,
    onRemoveSection,
    onAddSection,
    threadSectionBtnInput, 
}) {

    return (

        <div className={`${styles.createThread__inputDiv} ${styles.createThread__container}`}>
            <div className={`${styles.createThread__input__title}`}>
                Section {index + 1}
                <button onClick={() => onRemoveSection(index)}>
                    <MdOutlineCancel size={20} />
                </button>
            </div>

            <div className={`${styles.createThread__input}`}>
                <label htmlFor={`roadmapSectionType-${index}`}>Section Type:</label>
                <select
                    name="roadmapSectionType"
                    id={`roadmapSectionType-${index}`}
                    value={section.roadmapSectionType || "roadmapSectionCourses"}
                    onChange={(e) =>
                        handleSelectSectionType(index, "roadmapSectionType", e.target.value)
                    }
                >
                    <option value="roadmapSectionCourses">Courses</option>
                    <option value="roadmapSectionProjects">Projects</option>
                    <option value="roadmapSectionCompetitions">Competitions</option>
                </select>
            </div>

            <div className={`${styles.createThread__input}`}>
                <label htmlFor={`roadmapSectionTitle-${index}`}>Section Title: </label>
                <input
                    id={`roadmapSectionTitle-${index}`}
                    type="text"
                    name="roadmapSectionTitle"
                    placeholder="Add section title..."
                    value={section.roadmapSectionTitle || ""}
                    onChange={(e) =>
                        onSectionInputChange(index, "roadmapSectionTitle", e.target.value)
                    }
                />
            </div>

            <div className={`${styles.createThread__input}`}>
                <label htmlFor={`roadmapSectionDescription-${index}`}>Section Description: </label>
                <input
                    id={`roadmapSectionDescription-${index}`}
                    type="text"
                    name="roadmapSectionDescription"
                    placeholder="Add section description..."
                    value={section.roadmapSectionDescription || ""}
                    onChange={(e) =>
                        onSectionInputChange(index, "roadmapSectionDescription", e.target.value)
                    }
                />
            </div>

            {/* Render the buttons passed from the container */}
            <div className={`${styles.createThread__inputDiv}`}>
                {threadSectionBtnInput}
            </div>

            {/* Button to Add a New Section */}
            <button
                className={`${styles.createThread__button__addContent}`}
                type="button"
                onClick={onAddSection}
            >
                <BiPlusCircle size={20} />
                Add Roadmap Thread Section
            </button>
        </div>        
    );
    
}
