import React from "react";

const Stat = ({ children, style, className = "" }) => {
  return (
    <div className="my-1 stats shadow ">
      <div className="stat p-2">
        <div className={"stat-value text-xl " + className} style={style}>
          $ {children}
        </div>
      </div>
    </div>
  );
};

export default Stat;
