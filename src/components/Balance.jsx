import { useGlobalStatae } from "./context/GlobalState";

const Balance = () => {
  //obtenemos la funcion que nos devuelve el contexto
  const data = useGlobalStatae();

  return (
    <div>
      <h1>Balance:</h1>
      <div className="">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Balance;
