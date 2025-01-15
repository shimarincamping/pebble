import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/LearnForum.module.css";

export default function ForumPageHeader() {
  return (
    <section className={styles.forumHeader__header}>
      <Link to="#">
        <button className={styles.forumHeader__button}>
          <AiOutlinePlus size={20} /> Create New Thread
        </button>
      </Link>
    </section>
  );
}
