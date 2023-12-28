//esta funcion recibe un estado que es el estado global y una actions que es el payload o lo que le mandemos
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      //retornamos todo lo que venga en el estado actual transaction mas el payload pasado
      //console.log("stateReduce", state);

      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      //retornamos todo lo que venga en el estado actual transaction mas el payload pasado
      //console.log("stateReduce", state);

      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
