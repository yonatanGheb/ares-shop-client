export const initialState = {
  total: 0,
  products: []
};

// Initialize Cart reducer state -> Try to get state from localstorage
export const initializer = () => {
  const localStorageState = JSON.parse(localStorage.getItem('localCart'));
  return localStorageState ? localStorageState : initialState;
};

// Cart reducer actions
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ONE_ITEM_TO_CART':
      return {
        ...state,
        products: payload.products
      };
    case 'REMOVE_ONE_ITEM_FROM_CART':
      return {
        ...state,
        products: payload.products
      };
    case 'UPDATE_TOTAL_PRICE':
      return {
        ...state,
        total: payload.total
      };
    case 'CLEAR_CART':
      return { ...payload };

    default:
      throw new Error(`No case for action type of ${type} found in cart reducer.`);
  }
};
