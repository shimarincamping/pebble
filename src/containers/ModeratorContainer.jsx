import React, { useState } from "react";
import ModeratorComponent from "../components/Moderator";

const ModeratorContainer = () => {
  // Dummy comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "HANNAH SCHERMER",
      time: "7 mins",
      profilePic: "https://i.imgur.com/qPzFvF4.jpeg",
      postTitle: "How I Used Programming to Launch a Successful YouTube Career",
      postAuthor: "JESSEE FONG",
      content:
        "I’ve been watching all your latest videos and I have to say that I could make a better UI in my sleep! You call this post-worthy? Trash. Go next, idiot.",
    },
    {
      id: 2,
      user: "SUM TING WONG",
      time: "22 mins",
      profilePic: "https://i.imgur.com/qPzFvF4.jpeg",
      postTitle:
        "My Journey into Mobile Applications Development: OtterOfferings",
      postAuthor: "DYLAN DWIGHT",
      content:
        "Hey dimwit! I did all the work for that assignment. Get off this platform before I report you for being a senseless programmer that can’t even print an integer!",
    },
  ]);

  // Function to delete a comment
  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  // Function to approve a comment (just removing it from moderation queue)
  const handleApprove = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <ModeratorComponent
      comments={comments}
      onDelete={handleDelete}
      onApprove={handleApprove}
    />
  );
};

export default ModeratorContainer;
