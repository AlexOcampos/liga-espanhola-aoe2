import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  NAVBAR_OPEN,
  NAVBAR_CLOSE,
  NOTIFICATION_OPEN,
  NOTIFICATION_CLOSE,
} from "../actions";

const nav_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === NAVBAR_OPEN) {
    return { ...state, isNavbarOpen: true };
  }
  if (action.type === NAVBAR_CLOSE) {
    return { ...state, isNavbarOpen: false };
  }

  if (action.type === NOTIFICATION_OPEN) {
    return { ...state, isNotificationOpen: true };
  }
  if (action.type === NOTIFICATION_CLOSE) {
    return { ...state, isNotificationOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default nav_reducer;
