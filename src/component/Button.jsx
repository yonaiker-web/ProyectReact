import React from "react";

const Button = ({ texto, isButtonClick, isPlus, isMinus, onClick }) => {
  return (
    <button
      className={isButtonClick ? "btn btn-primary" : "btn btn-secondary"}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Button;
