import React, { useState, useEffect } from "react";
import ForumPageHeader from "../components/ForumPageHeader";
import ForumThreadPreviewCard from "../components/ForumThreadPreviewCard";

export default function ForumPageContainer() {
  const dummyForumThreadData = {
    threadID: 1,
    threadTitle:
      "GongGong.AI a revolutionary new way for the older generation to interact with technology!",
    threadDateTime: "2021-01-01 12:00:00",
    threadType: "Feedback Thread",
    threadContent:
      "I would love to receive some feedback on my newly created project that was made during the AI Nusantara GenAI workshop! Was wondering if the implementation of Gemini 1.5 Flash was the best choice for this use case. I’m also working on my conciseness and readability, so any additional feedback on that is appreciate. Thanks to anyone that takes the time to review this!",
    threadScore: 38,
    commentCount: 15,
    shareCount: 128,
    isFlagged: false,
    userData: {
      userID: 1,
      profilePicture: "https://i.imgur.com/qPzFvF4.jpeg",
      fullName: "Anoop Singh",
      description: "BSE | Data Science | Finance",
    },
  };
  const [forumThread, setForumThread] = useState(null);

  useEffect(() => {
    const fetchData = setInterval(() => {
      setForumThread(dummyForumThreadData);
    }, 5000);

    return () => clearInterval(fetchData);
  }, []);

  return (
    <>
      <ForumPageHeader />
      {forumThread ? (
        <ForumThreadPreviewCard
          threadID={forumThread.threadID}
          threadTitle={forumThread.threadTitle}
          threadDateTime={forumThread.threadDateTime}
          threadType={forumThread.threadType}
          threadContent={forumThread.threadContent}
          threadScore={forumThread.threadScore}
          commentCount={forumThread.commentCount}
          shareCount={forumThread.shareCount}
          isFlagged={forumThread.isFlagged}
          userProfilePicture={forumThread.userData.profilePicture}
          userName={forumThread.userData.fullName}
          userDescription={forumThread.userData.description}
        />
      ) : (
        <ForumThreadPreviewCard />
      )}
    </>
  );
}
