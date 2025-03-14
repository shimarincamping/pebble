import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";

export default function ForumThreadInputFieldRoadmapDescription(props) {
    return (
        <>
            <div className={`${styles.createThread__input__title}`}>
                Description {props.index + 1}
                {props.index !== 0 ? (
                    <>
                        <button>
                            <MdOutlineCancel
                                size={20}
                                onClick={props.deleteDescription}
                            />
                        </button>
                    </>
                ) : null}
            </div>
            <div className={`${styles.createThread__input}`}>
                <label htmlFor="roadmapDescriptionTitle">
                    Roadmap Description Heading
                </label>
                <input
                    required
                    type="text"
                    name="roadmapDescriptionTitle"
                    placeholder="Add a description heading..."
                    onChange={(e) =>
                        props.onDescriptionInputChange(
                            props.index,
                            "roadmapDescriptionTitle",
                            e.target.value
                        )
                    }
                ></input>
            </div>
            <div className={`${styles.createThread__input}`}>
                <label htmlFor="roadmapDescriptionContent">
                    Roadmap Description Content
                </label>
                <textarea
                    required
                    rows="8"
                    type="text"
                    name="roadmapDescriptionContent"
                    placeholder="Add a description body..."
                    onChange={(e) =>
                        props.onDescriptionInputChange(
                            props.index,
                            "roadmapDescriptionContent",
                            e.target.value
                        )
                    }
                ></textarea>
            </div>
        </>
    );
}