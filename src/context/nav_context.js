import React, { useContext, useReducer } from "react";
import reducer from "../reducers/nav_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  NAVBAR_OPEN,
  NAVBAR_CLOSE,
  NOTIFICATION_OPEN,
  NOTIFICATION_CLOSE,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  isNavbarOpen: true,
  isNotificationOpen: false,
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

  const openNavbar = () => {
    console.log(`Open Navbar`);
    dispatch({ type: NAVBAR_OPEN });
  };

  const closeNavbar = () => {
    dispatch({ type: NAVBAR_CLOSE });
  };

  const openNotification = () => {
    console.log(`Open Notification`);
    dispatch({ type: NOTIFICATION_OPEN });
  };

  const closeNotification = () => {
    dispatch({ type: NOTIFICATION_CLOSE });
  };

  return (
    <NavContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openNavbar,
        closeNavbar,
        openNotification,
        closeNotification,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
// make sure use
export const useNavContext = () => {
  return useContext(NavContext);
};
