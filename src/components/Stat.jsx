import React from "react";

const Stat = ({ children, styleText }) => {
  return (
    <div className="my-1 stats shadow ">
      <div className="stat p-2">
        <div className="stat-value text-xl">$ {children}</div>
      </div>
    </div>
  );
};

export default Stat;
