import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";

export default function ForumThreadAddComment(props) {
    return (
        <form onSubmit={props.onSubmit} action="">
            <section className={`${styles.createComment__section}`}>
                <div className={`${styles.createComment__input}`}>
                    <div className={`${styles.createComment__cancel}`}>
                        <label htmlFor="commentDetails">Add a Comment</label>
                        <button onClick={props.onCancel}>
                            <MdOutlineCancel size={25} />
                        </button>
                    </div>
                    <input
                        type="text"
                        name="commentDetails"
                        placeholder={`Reply to ${props.repliesTo}`}
                        value={props.inputText}
                        onChange={props.onChange}
                    ></input>
                </div>
                <div className={`${styles.createComment__footer}`}>
                    <button type="submit">Submit</button>
                </div>
            </section>
        </form>
    );
}
