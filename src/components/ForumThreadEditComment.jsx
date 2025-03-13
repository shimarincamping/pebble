import React from "react";
import styles from "../styles/Forum.module.css";
import { MdOutlineCancel } from "react-icons/md";

function ForumThreadEditComment(props) {
    return (
        <form onSubmit={props.onSubmit} action="">
            <section className={`${styles.createComment__section}`}>
                <div className={`${styles.createComment__input}`}>
                    <div className={`${styles.createComment__cancel}`}>
                        <label htmlFor="commentDetails">Edit Comment</label>
                        <button onClick={props.showCommentEditField}>
                            <MdOutlineCancel size={25} />
                        </button>
                    </div>
                    <input
                        type="text"
                        name="commentDetails"
                        placeholder="Edit comment..."
                        value={props.editedCommentData.commentDetails}
                        onChange={props.onChange}
                    ></input>
                </div>
                <div className={`${styles.createComment__footer}`}>
                    <button type="submit">Edit</button>
                </div>
            </section>
        </form>
    );
}

export default ForumThreadEditComment;
