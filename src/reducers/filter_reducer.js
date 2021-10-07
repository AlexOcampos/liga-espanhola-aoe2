import { UPDATE_FILTERS, CLEAR_FILTERS } from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    // a la propiedad de filters le estamos poniendo el mismo nombre que al formulario de la web, por eso funciona esta asignación
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
