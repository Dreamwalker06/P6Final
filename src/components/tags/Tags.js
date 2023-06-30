import React from "react";
import "./Tags.scss";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <button key={index}>{tag}</button>
      ))}
    </div>
  );
};

export default Tags;
