import React from "react";

const Count = ({ count }) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-value">{count}</div>
      </div>
    </div>
  );
};

export default Count;
