import { useReducer } from "react";
import { createContext } from "react";
import { Action } from "./Action";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const initial = {
    toggle: false,
    message: null,
    loading: false,
    disabled: false,
  };

  const [state, dispatch] = useReducer(Action, initial);

  const setMessage = payload =>
    dispatch({ type: "SET_MESSAGE", payload });

  const setLoading = payload =>
    dispatch({ type: "SET_LOADING", payload });

  const setDisabled = payload =>
    dispatch({ type: "SET_DISABLED", payload });

  const setToggle = payload =>
    dispatch({type: "SET_TOGGLE", payload})

  return (
    <MyContext.Provider
      value={{
        ...state,
        setMessage,
        setLoading,
        setDisabled,
        setToggle
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
