import React from "react";
import { GlobalProvider } from "./components/context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import TransactionForm from "./components/transactions/TransactionForm";
import Transaction_List from "./components/transactions/Transaction_List";
import IncomeExpenses from "./components/IncomeExpenses";

const App = () => {
  return (
    //englobamos todo lo demas en el GlobalProvider para que todo los children compartan la misma informacion
    <GlobalProvider>
      <div className="p-10  ">
        <div className="p-5  bg-slate-800 rounded-3xl flex gap-4  justify-between items-center">
          <div className="Descripcion">
            <Header />
            <Balance />
            <TransactionForm />
          </div>
          <div className="divider divider-horizontal"></div>

          <div className="">
            <Transaction_List />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
