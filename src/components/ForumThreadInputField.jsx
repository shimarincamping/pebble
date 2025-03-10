import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";

export default function ForumThreadInputField(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <section className={`${styles.createThread__section}`}>
                <div className={`${styles.createThread__header}`}>
                    <select
                        name="threadType"
                        id="threadType"
                        onChange={props.onSelectChange}
                    >
                        <option value="forum">Forum Thread</option>
                        <option value="roadmap">Roadmap Thread</option>
                    </select>
                    <button onClick={props.clickBackButton}>
                        <MdOutlineCancel size={30} />
                    </button>
                </div>

                {props.isThreadTypeRoadmap ? (
                    <>
                        <div className={`${styles.createThread__inputDiv}`}>
                            <div className={`${styles.createThread__input}`}>
                                <label htmlFor="roadmapThreadTitle">
                                    Roadmap Post Title
                                </label>
                                <input
                                    type="text"
                                    name="roadmapThreadTitle"
                                    placeholder="Add a post title..."
                                    onChange={props.onChange}
                                ></input>
                            </div>
                            <div className={`${styles.createThread__input}`}>
                                <label htmlFor="roadmapThreadAuthor">
                                    Roadmap Author
                                </label>
                                <input
                                    type="text"
                                    name="roadmapThreadAuthor"
                                    placeholder="Add a roadmap author..."
                                    onChange={props.onChange}
                                ></input>
                            </div>
                            <div className={`${styles.createThread__input}`}>
                                <label htmlFor="roadmapProfileImageLink">
                                    Roadmap Profile Image Link
                                </label>
                                <input
                                    type="text"
                                    name="roadmapProfileImageLink"
                                    placeholder="Add a profile image link..."
                                    onChange={props.onChange}
                                ></input>
                            </div>
                            <div className={`${styles.createThread__input}`}>
                                <label htmlFor="roadmapBannerImageLink">
                                    Roadmap Banner Image Link
                                </label>
                                <input
                                    type="text"
                                    name="roadmapBannerImageLink"
                                    placeholder="Add a profile image link..."
                                    onChange={props.onChange}
                                ></input>
                            </div>
                        </div>
                        <div
                            className={`${styles.createThread__inputDiv} ${styles.createThread__container}`}
                        >
                            {props.roadmapThreadDescription}
                            <button
                                className={`${styles.createThread__button__addContent}`}
                                type="button"
                                onClick={props.addRoadmapThreadDescription}
                            >
                                <BiPlusCircle size={20} />
                                Add Description
                            </button>
                        </div>
                        <div className={`${styles.createThread__inputDiv}`}>
                            {props.roadmapThreadSection}
                        </div>
                    </>
                ) : (
                    <div className={`${styles.createThread__inputDiv}`}>
                        <div className={`${styles.createThread__input}`}>
                            <label htmlFor="threadTitle">Post Title</label>
                            <input
                                type="text"
                                name="threadTitle"
                                placeholder="Add a post title..."
                                onChange={props.onChange}
                            ></input>
                        </div>
                        <div className={`${styles.createThread__input}`}>
                            <label htmlFor="threadDescription">
                                Post Description
                            </label>
                            <textarea
                                rows="8"
                                type="text"
                                name="threadDescription"
                                placeholder="Add a post description..."
                                onChange={props.onChange}
                            ></textarea>
                        </div>
                    </div>
                )}
                <div className={`${styles.createThread__buttons}`}>
                    <div className={`${styles.createThread__submit}`}>
                        <button type="submit">Post</button>
                    </div>
                </div>
            </section>
        </form>
    );
}
