import { useGlobalStatae } from "./context/GlobalState";

const Balance = () => {
  //obtenemos la funcion que nos devuelve el contexto
  const data = useGlobalStatae();

  //traemos  transactions que es la variable global
  const { transactions } = useGlobalStatae();

  //extraemos es un arreglo solo los montos de las transacciones
  const amount = transactions.map((transaction) => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h1>Balance: {total}</h1>
    </div>
  );
};

export default Balance;
