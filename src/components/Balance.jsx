import { useGlobalStatae } from "./context/GlobalState";

const Balance = () => {
  //obtenemos la funcion que nos devuelve el contexto
  const data = useGlobalStatae();

  //traemos  transactions que es la variable global
  const { transactions } = useGlobalStatae();

  //extraemos es un arreglo solo los montos de las transacciones
  const amounts = transactions.map((transaction) => transaction.amount);

  //calculamos la suma total de todos los montos
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="px-4">
      {/* {JSON.stringify(amounts, null, 2)} */}
      <h1>
        Tu Balance:
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value">$ {total}</div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Balance;
