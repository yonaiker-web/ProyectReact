//hook para crear contexto createContext y usar un contexto  useContext
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//inicializamos el estado que va a manejar el reducer
const initialState = {
  transactions: [],
};

//al usar el metodo para crear un Contexto este nos devuelve un obj
export const Context = createContext();

//aqui mismo obtenemos el contexto y lo retornamos de una vez
export const useGlobalStatae = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  //usaremos useReducer para crear funciones que actulicen el estado global, esto es muy parecido a un useState solo que le pasamos "AppReducer" que es el archivo que va a tner la logica  y el "initialState" que es el estado inicial
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    //en esta funcion le pasamos el dispatch que activa una accion de type, y el payload que es el contenido que en este caso es un objeto transaction que tiene description y monto
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    //en esta funcion le pasamos el dispatch que activa una accion de type, y el payload que es el contenido que en este caso es un objeto transaction que tiene description y monto
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      //el value no solo sirve para pasar valores sino funciones
      //transactions es la variable global que contiene el to global
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
