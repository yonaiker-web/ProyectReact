import React from "react";
import { GlobalProvider } from "./components/context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import TransactionForm from "./components/transactions/TransactionForm";
import Transaction_List from "./components/transactions/Transaction_List";

const App = () => {
  return (
    //englobamos todo lo demas en el GlobalProvider para que todo los children compartan la misma informacion
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <Transaction_List />
      <h1>Hola</h1>
    </GlobalProvider>
  );
};

export default App;
