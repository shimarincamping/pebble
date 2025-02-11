import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineLink, MdOutlineImage, MdOutlineCancel } from "react-icons/md";

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
                        <option value="feedbackThread">Feedback Thread</option>
                        <option value="discussionThread">
                            Discussion Thread
                        </option>
                        <option value="roadmapThread">Roadmap Thread</option>
                    </select>
                    <button onClick={props.clickBackButton}>
                        <MdOutlineCancel size={30} />
                    </button>
                </div>
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
                    <label htmlFor="threadDescription">Post Description</label>
                    <textarea
                        rows="8"
                        type="text"
                        name="threadDescription"
                        placeholder="Add a post description..."
                        onChange={props.onChange}
                    ></textarea>
                </div>
                <div className={`${styles.createThread__buttons}`}>
                    <div
                        className={`${styles.createThread__buttons__attachments}`}
                    >
                        <button>
                            <MdOutlineLink size={20} />
                            <span>Embed a repository link</span>
                        </button>
                        <button>
                            <MdOutlineImage size={20} />
                            <span>Add media</span>
                        </button>
                        {props.roadmapLinkButton}
                    </div>
                    <div className={`${styles.createThread__submit}`}>
                        <button type="submit">Post</button>
                    </div>
                </div>
            </section>
        </form>
    );
}
