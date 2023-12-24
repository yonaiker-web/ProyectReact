import React from "react";

const Pantalla = ({ input }) => {
  return (
    <div
      type="text"
      className="input input-bordered w-full max-w-xs bg-slate-800 text-gray-200 "
    >
      {input}
    </div>
  );
};

export default Pantalla;
