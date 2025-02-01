import React, { useState } from "react";
import ForumThreadInputField from "../components/ForumThreadInputField";

export default function ForumCreateThreadContainer(props) {
  const [threadData, setThreadData] = useState({
    threadType: "",
    threadTitle: "",
    threadDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setThreadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior};
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ForumThreadInputField
          onChange={handleInputChange}
          clickBackButton={props.clickBackButton}
        />
      </form>
    </div>
  );
}
