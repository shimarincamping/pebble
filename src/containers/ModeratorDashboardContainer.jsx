import React, { useState } from "react";
import ModeratorDashboardComponent from "../components/ModeratorDashboard";
import ModerationDialogCard from "../components/ModerationDialogCard";

const ModeratorDashboardContainer = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  // Open the dialog and track action type (approve/reject)
  const handleOpenDialog = (action, commentId) => {
    setActionType(action); // Store if it's approve or reject
    setSelectedCommentId(commentId); // Store comment ID for action
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
    setSelectedCommentId(null);
  };

  const handleConfirm = () => {
    if (actionType === "approve") {
      handleApprove(selectedCommentId);
    } else if (actionType === "reject") {
      handleDelete(selectedCommentId);
    }
    handleCloseDialog();
  };

  // Dummy comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "HANNAH SCHERMER",
      time: "7 mins",
      profilePic: "https://i.imgur.com/qPzFvF4.jpeg",
      postTitle: "How I Used Programming to Launch a Successful YouTube Career",
      postAuthor: "JESSEE FONG",
      content: "I’ve been watching all your latest videos and I have to say that I could make a better UI in my sleep! You call this post-worthy? Trash. Go next, idiot.",
    },
    {
      id: 2,
      user: "SUM TING WONG",
      time: "22 mins",
      profilePic: "https://i.imgur.com/qPzFvF4.jpeg",
      postTitle: "My Journey into Mobile Applications Development: OtterOfferings",
      postAuthor: "DYLAN DWIGHT",
      content: "Hey dimwit! I did all the work for that assignment. Get off this platform before I report you for being a senseless programmer that can’t even print an integer!",
    },
  ]);

  // Function to delete a comment (Reject action)
  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  // Function to approve a comment
  const handleApprove = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <ModeratorDashboardComponent
        comments={comments}
        onDelete={(id) => handleOpenDialog("reject", id)}
        onApprove={(id) => handleOpenDialog("approve", id)}
      />

      {isDialogVisible && (
        <ModerationDialogCard
          onClose={handleCloseDialog}
          onConfirm={handleConfirm}
          onReject={handleCloseDialog} // Reject just closes
          actionType={actionType} // Pass action type
        />
      )}
    </>
  );
};

export default ModeratorDashboardContainer;
