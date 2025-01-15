import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function ForumPageHeader() {
  return (
    <section>
      <Link to="#">
        <button>
          <AiOutlinePlus size={20} /> Create New Thread
        </button>
      </Link>
    </section>
  );
}
