import React, { useContext, useReducer } from "react";
import reducer from "../reducers/nav_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    console.log(`Open sidebar`);
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <NavContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </NavContext.Provider>
  );
};
// make sure use
export const useNavContext = () => {
  return useContext(NavContext);
};
