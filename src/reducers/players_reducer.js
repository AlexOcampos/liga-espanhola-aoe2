import {
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_ERROR,
} from "../actions";

const players_reducer = (state, action) => {
  if (action.type === GET_PLAYERS_BEGIN) {
    return { ...state, players_loading: true };
  }
  if (action.type === GET_PLAYERS_SUCCESS) {
    return {
      ...state,
      players_loading: false,
      players: action.payload,
    };
  }
  if (action.type === GET_PLAYERS_ERROR) {
    return { ...state, players_loading: false, players_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default players_reducer;
