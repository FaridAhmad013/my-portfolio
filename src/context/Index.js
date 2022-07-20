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
    detailImage: false,
    detailProjek: false,
    dataImage: null
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

  const setDetailImage = payload =>
    dispatch({type: "SET_DETAIL_IMAGE", payload})

  const setDetailProjek = payload =>
    dispatch({type: "SET_DETAIL_PROJEK", payload})

  const setDataImage = ({images, title, description}) => 
    dispatch({type: "SET_DATA_IMAGE", payload: {
      images,
      title,
      description
    }})
  return (
    <MyContext.Provider
      value={{
        ...state,
        setMessage,
        setLoading,
        setDisabled,
        setToggle,
        setDetailImage,
        setDetailProjek,
        setDataImage
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
