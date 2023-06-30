import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-title-text">
      <button>
        {title}
        <span
          className={`collapse-arrow ${isCollapsed ? "" : "rotated"}`}
          onClick={handleToggleCollapse}
        >
          <img src="../images/arrow_back_ios-24px2.svg" alt="arrow up" />
        </span>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "closed" : "expanded"}`}
      >
        {" "}
        <div className="collapse-title">{text}</div>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
