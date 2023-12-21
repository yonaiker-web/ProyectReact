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
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={state.transactions}>{children}</Context.Provider>
  );
};
