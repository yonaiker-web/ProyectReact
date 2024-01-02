import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalStatae } from "./context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalStatae();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc, transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc, transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  console.log(totalIncome);
  console.log(totalExpenses);
  console.log(totalExpensesPercentage);
  console.log(totalIncomePercentage);

  //el objeto de grafico de pie
  const PieChart = () => {
    return (
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Gastos", y: totalExpensesPercentage },
          { x: "Ingresos", y: totalIncomePercentage },
        ]}
        animate={{ duration: 200 }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    );
  };

  return (
    <div>
      <PieChart />
    </div>
  );
};

export default ExpenseChart;
