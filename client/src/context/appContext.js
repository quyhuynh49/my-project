import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { SETUP_USER_BEGIN, SETUP_USER_SUCCESS } from "./actions";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  user: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user } = data;
      console.log(user);
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, setupUser }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
