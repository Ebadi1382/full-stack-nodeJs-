export const cartReducer = (state = { cartItem: [] }, { type, payload }) => {
  switch (type) {
    case "cart_Add_Item":
      const existingItem = state.cartItem.find((i) => {
        return i.product === payload.product;
      });
      if (existingItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((i) => {
            return i.product === existingItem.product ? payload : i;
          }),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, payload],
        };
      }
      case "CART_REMOVE_ITEM":
        return {
          ...state,
          cartItem: state.cartItem.filter((item) => item.product !== payload),
        };
    default:
      return state;
  }
};