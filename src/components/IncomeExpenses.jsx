import React from "react";
import { useGlobalStatae } from "./context/GlobalState";

const IncomeExpenses = () => {
  //traemos el estado glboal
  const { transactions } = useGlobalStatae();

  //extramos solo los montos del arreglo
  const amounts = transactions.map((transaction) => transaction.amount);

  //guardamos y sumamos solo los montos mayores a 0
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  //guardamos y sumamos solo los gatos o montos menores a 0
  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="p-4">
      <div className="">
        <h4>Ingreso Total</h4>
        <p>$ {income}</p>
      </div>
      <div className="">
        <h4>Gatos Total</h4>
        <p>$ {expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
