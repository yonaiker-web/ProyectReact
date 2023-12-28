import React, { useState } from "react";
import { useGlobalStatae } from "../context/GlobalState";

const Transaction_List = () => {
  const { transactions, deleteTransaction } = useGlobalStatae();

  const deleteTransactionId = (id) => {
    deleteTransaction(id);
  };

  return (
    <div>
      <div className="w-[600px]">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripcion</th>
              <th>Monto</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction_List;
