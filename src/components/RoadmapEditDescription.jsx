import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";

export default function RoadmapEditInputFieldDescription({ 
    index, 
    descriptionData, 
    onDescriptionInputChange, 
    onRemoveDescription ,
    addRoadmapDescription
}) {
    return (
        <>
            <div className={`${styles.createThread__input__title}`}>
                Description {index + 1}
                <button type="button" onClick={() => onRemoveDescription(index)}>
                    <MdOutlineCancel size={20} />
                </button>
            </div>
            <div className={`${styles.createThread__input}`}>
                <label htmlFor={`roadmapDescriptionTitle-${index}`}>
                    Roadmap Description Heading
                </label>
                <input
                    type="text"
                    name={`roadmapDescriptionTitle-${index}`}
                    placeholder="Add a description heading..."
                    value={descriptionData?.roadmapDescriptionTitle || ""}
                    onChange={(e) =>
                        onDescriptionInputChange(index, "roadmapDescriptionTitle", e.target.value)
                    }
                />
            </div>
            <div className={`${styles.createThread__input}`}>
                <label htmlFor={`roadmapDescriptionContent-${index}`}>
                    Roadmap Description Content
                </label>
                <textarea
                    rows="8"
                    name={`roadmapDescriptionContent-${index}`}
                    placeholder="Add a description body..."
                    value={descriptionData?.roadmapDescriptionContent || ""}
                    onChange={(e) =>
                        onDescriptionInputChange(index, "roadmapDescriptionContent", e.target.value)
                    }
                />
            </div>
            <button
                    className={`${styles.createThread__button__addContent}`}
                    type="button"
                    onClick={() => addRoadmapDescription(index)}
                >
                    <BiPlusCircle size={20} /> Add Roadmap Description
                </button>
        </>
    );
}
