import React from "react";

const Testimonio = (props) => {
  return (
    <div className="w-[60%] p-4 content-start">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-[50%] shrink-0">
          <img
            src={require(`../assets/img/${props.imagen}.jpg`)}
            className="w-[100%]"
            alt="emma"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <strong>{props.nombre}</strong> en <strong>{props.pais}! </strong>
          </h2>
          <p>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p>"{props.testimonio}".</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
