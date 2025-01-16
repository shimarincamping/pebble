import React from "react";
import ForumThreadPreviewCard from "./ForumThreadPreviewCard";

export default function ForumThreadGenerator(props) {
  return (
    <div>
      {props.threads.map((thread, index) => (
        <ForumThreadPreviewCard
          threadIndex={index}
          {...thread}
          {...thread.userData}
        />
      ))}
    </div>
  );
}
