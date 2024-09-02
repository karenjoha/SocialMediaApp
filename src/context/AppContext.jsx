import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import userReducer from "../reducers/userReducer";
import newsReducer from "../reducers/newsReducer";

// 1. Crear el contexto
export const AppContext = createContext(null);

// 2. Proveer el context

const AppContextProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, {
    user: null,
    isAuth: true,
  });
  const [news, newsDispatch] = useReducer(newsReducer, {
    news: [],
    statusFilter: false,
    loading: false,
    error: null,
  });

  const globalState = {
    user,
    userDispatch,
    news,
    newsDispatch,
  };
  return (
    <AppContext.Provider value={globalState}>{children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;

// 3. Acceder al contexto
