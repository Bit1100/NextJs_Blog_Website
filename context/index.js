import { useReducer, useContext, createContext } from "react";

const Context = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const initialState = {
    query: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(Context);

  if (!context) {
    return "useCustomContext() can only be used inside the App Layout";
  }

  return context;
};
