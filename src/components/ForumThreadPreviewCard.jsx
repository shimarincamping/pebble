import React from "react";
import { Link } from "react-router-dom";
import ComponentLoadingSpinner from "./ComponentLoadingSpinner";
import { BiUpvote, BiCommentDetail, BiShareAlt, BiFlag } from "react-icons/bi";
import styles from "../styles/Forum.module.css";

export default function ForumThreadPreviewCard(props) {
  return (
    <article className={`${styles.threadCard__thread}`}>
      <Link>
        <div className={`${styles.threadCard__header}`}>
          <div className={`${styles.threadCard__title}`}>
            <h1>{props.threadTitle}</h1>
            <time datetime={props.threadDateTime}>
              Posted on {props.threadDateTime}
            </time>
          </div>
          <div className={`${styles.threadCard__threadType}`}>
            {props.threadType}
          </div>
        </div>
        <div className={`${styles.threadCard__body}`}>
          <p>{props.threadContent}</p>
        </div>
        <div className={`${styles.threadCard__footer}`}>
          <div className={`${styles.threadCard__statistics}`}>
            <span>
              <BiUpvote size={20} /> {props.threadScore}
            </span>
            <span>
              <BiCommentDetail size={20} /> {props.commentCount}
            </span>
            <span>
              <BiShareAlt size={20} /> {props.shareCount}
            </span>
            <span>
              <BiFlag size={20} />
            </span>
          </div>
          <div className={`${styles.threadCard__profile}`}>
            <div className={`${styles.threadCard__profile__image}`}>
              <img
                src={props.userData.profilePicture}
                alt="user profile icon"
              />
            </div>
            <div className={`${styles.threadCard__profile__details}`}>
              <span>{props.userData.fullName}</span>
              <span>{props.userData.description}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
