import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";
function ForumThreadEditThread(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <section className={`${styles.createThread__section}`}>
                <div className={`${styles.createThread__input__title}`}>
                    Edit Thread
                    <button>
                        <MdOutlineCancel
                            size={20}
                            onClick={props.showThreadEditField}
                        />
                    </button>
                </div>
                <div className={`${styles.createThread__inputDiv}`}>
                    <div className={`${styles.createThread__input}`}>
                        <label htmlFor="threadTitle">Post Title</label>
                        <input
                            type="text"
                            name="threadTitle"
                            placeholder="Add a post title..."
                            value={props.editedData.threadTitle}
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
                            value={props.editedData.threadDescription}
                            onChange={props.onChange}
                        ></textarea>
                    </div>
                </div>
                <div className={`${styles.createThread__buttons}`}>
                    <div className={`${styles.createThread__submit}`}>
                        <button type="submit">Edit</button>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default ForumThreadEditThread;
