import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    // a la propiedad de filters le estamos poniendo el mismo nombre que al formulario de la web, por eso funciona esta asignación
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(text) ||
          product.discord.toLowerCase().includes(text)
        );
      });
    }
    return { ...state, filtered_products: tempProducts };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
