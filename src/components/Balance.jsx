import IncomeExpenses from "./IncomeExpenses";
import Stat from "./Stat";
import { useGlobalStatae } from "./context/GlobalState";

const Balance = () => {
  //obtenemos la funcion que nos devuelve el contexto
  const data = useGlobalStatae();

  //traemos  transactions que es la variable global
  const { transactions } = useGlobalStatae();

  //extraemos es un arreglo solo los montos de las transacciones
  const amounts = transactions.map((transaction) => transaction.amount);

  //calculamos la suma total de todos los montos
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="pt-5 flex gap-8  justify-between items-center">
      {/* {JSON.stringify(amounts, null, 2)} */}
      <div className="">
        <IncomeExpenses />
      </div>

      <div className="divider divider-horizontal"></div>

      <div className="">
        <h1>Tu Balance:</h1>
        <Stat>{total}</Stat>
      </div>
    </div>
  );
};

export default Balance;
