import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PLAYERS,
  LOAD_PLAYERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PLAYERS) {
    return {
      ...state,
      all_players: [...action.payload],
      filtered_players: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    // a la propiedad de filters le estamos poniendo el mismo nombre que al formulario de la web, por eso funciona esta asignación
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PLAYERS) {
    const { all_players } = state;
    const { text } = state.filters;
    let tempPlayers = [...all_players];
    if (text) {
      tempPlayers = tempPlayers.filter((player) => {
        return (
          player.name.toLowerCase().includes(text.toLowerCase()) ||
          player.discord.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
    return { ...state, filtered_players: tempPlayers };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
