import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/players_reducer";
import { players_detailed_url as url } from "../utils/constants";
import {
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_ERROR,
} from "../actions";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const initialState = {
  players_loading: false,
  players_error: false,
  players: [],
};

const PlayersContext = React.createContext();

export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPlayers = async (url) => {
    dispatch({ type: GET_PLAYERS_BEGIN });

    try {
      const response = await axios.get(url);
      const players = response.data.players;
      console.log(players);
      dispatch({ type: GET_PLAYERS_SUCCESS, payload: players });
    } catch (error) {
      dispatch({ type: GET_PLAYERS_ERROR });
    }
  };

  useEffect(() => {
    fetchPlayers(url);
  }, []);

  return (
    <PlayersContext.Provider value={{ ...state }}>
      {children}
    </PlayersContext.Provider>
  );
};
// make sure use
export const usePlayersContext = () => {
  return useContext(PlayersContext);
};
