import React, { useState } from "react";
import { useGlobalStatae } from "../context/GlobalState";
import Transaction_Item from "./Transaction_Item";

const Transaction_List = () => {
  const { transactions } = useGlobalStatae();

  return (
    <div>
      <div className=" ">
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
              <Transaction_Item
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction_List;
