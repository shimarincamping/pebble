import React from "react";
import styles from "../styles/dialogCard.module.css";

function ModerationDialogCard({ onClose, onConfirm, actionType }) {
    return (
        <div className={styles.dialogContainer}>
            <img 
                className={styles.dialogIcon}
                src="/icons/warning.png"
                alt="Moderation Warning"
            />

            <h1>
                {actionType === "approve"
                    ? "Are you sure you want to approve this comment?"
                    : "Are you sure you want to reject this comment?"}
            </h1>

            <p>This content will be {actionType === "approve" ? "approved" : "rejected"}.</p>

            <div className={styles.dialogActions}>
                {actionType === "reject" && (
                    <button className={styles.rejectBtn} onClick={onConfirm}>
                        Reject
                    </button>
                )}

                {actionType === "approve" && (
                    <button className={styles.acceptBtn} onClick={onConfirm}>
                        Approve
                    </button>
                )}

                <button className={styles.closeBtn} onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default ModerationDialogCard;
