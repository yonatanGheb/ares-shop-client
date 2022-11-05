export const initialState = {
  total: 0,
  products: []
};

// Initialize Cart reducer state -> Try to get state from localstorage
export const initializer = (initialValue = initialState) => {
  const localStorageState = JSON.parse(localStorage.getItem('localCart'));
  return localStorageState ? localStorageState : initialState;
};

// Cart reducer actions
export const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log('state in cart reduceeeer', state);

  switch (type) {
    case 'ADD_ONE_ITEM_TO_CART':
      console.log('ADD_TO_CART', payload);

      return {
        ...state,
        products: payload.products
      };
    case 'REMOVE_ONE_ITEM_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);

      return {
        ...state,
        products: payload.products
      };
    case 'UPDATE_TOTAL_PRICE':
      console.log('UPDATE_PRICE', payload);

      return {
        ...state,
        total: payload.total
      };
    default:
      throw new Error(`No case for action type of ${type} found in cart reducer.`);
  }
};
