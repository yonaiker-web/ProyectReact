import React, { useState } from "react";
import { useGlobalStatae } from "../context/GlobalState";

const Transaction_Item = ({ transaction }) => {
  const { deleteTransaction } = useGlobalStatae();
  const [showModal, setShowModal] = useState(false);

  const deleteTransactionId = (id) => {
    console.log("deleteTransaction", id);

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Eliminar!</h3>
        <p className="py-4">
          Desea eliminar el item de Id: {transaction.id}, de la lista?
        </p>
        <div className="modal-action">
          <button
            className="btn text-end btn-error"
            onClick={() => deleteTransaction(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </dialog>;
  };
  return (
    <>
      <tr>
        <th>{transaction.id}</th>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>
          <button
            className="btn btn-error"
            onClick={() => deleteTransactionId(transaction.id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default Transaction_Item;
