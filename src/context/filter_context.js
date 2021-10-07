import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { UPDATE_FILTERS, FILTER_PRODUCTS } from "../actions";
import players from "../utils/players-t3.json";

const initialState = {
  filters: {
    text: "",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = (e) => {};

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
