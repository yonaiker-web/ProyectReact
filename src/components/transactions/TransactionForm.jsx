import React, { useState } from "react";
import { useGlobalStatae } from "../context/GlobalState";

const TransactionForm = () => {
  //traemos la funcion addTransaction del useGlobalState que es el contexto global
  const { addTransaction } = useGlobalStatae();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    //le pasamos a la funcion estos valores para ejecutarlos en el useGlobalStatae
    addTransaction({
      //window.crypto.randomUUID() genera un guid
      id: window.crypto.randomUUID(),
      description,
      //el simbolo del + convierte todo lo que este en ese campo a un numero entero
      amount: +amount,
    });
  };
  return (
    <div className="text-center px-4">
      <form className="max-w-sm" onSubmit={onSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              step="0.01"
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">Primary</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
