import React from "react";
import { GlobalProvider } from "./components/context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import TransactionForm from "./components/transactions/TransactionForm";

const App = () => {
  return (
    //englobamos todo lo demas en el GlobalProvider para que todo los children compartan la misma informacion
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hola</h1>
    </GlobalProvider>
  );
};

export default App;
