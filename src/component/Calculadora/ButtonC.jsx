import React from "react";

const ButtonC = ({ children }) => {
  const isOperator = (value) => {
    return isNaN(value) && value != "." && value != "=";
  };
  return (
    <div
      className={`btn btn-primary text-3xl	${
        isOperator(children) ? "operator" : null
      }`}
    >
      {children}
    </div>
  );
};

export default ButtonC;
