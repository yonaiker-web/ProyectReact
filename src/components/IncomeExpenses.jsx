import React from "react";
import { useGlobalStatae } from "./context/GlobalState";
import Stat from "./Stat";

const IncomeExpenses = () => {
  //traemos el estado glboal
  const { transactions } = useGlobalStatae();

  //extramos solo los montos del arreglo
  const amounts = transactions.map((transaction) => transaction.amount);

  //guardamos y sumamos solo los montos mayores a 0
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  //guardamos y sumamos solo los gatos o montos menores a 0
  const expenses =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <div className=" flex gap-8 justify-between">
      <div className="">
        <h4>Ingreso Total</h4>
        <Stat styleText={"text-primary"}>{income}</Stat>
      </div>
      <div className="">
        <h4>Gatos Total</h4>
        <Stat styleText={`text-color:black`}>{expenses}</Stat>
      </div>
    </div>
  );
};

export default IncomeExpenses;
