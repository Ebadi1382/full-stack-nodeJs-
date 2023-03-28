export const productReducer = (state = { product: [] }, { type, payload }) => {
  switch (type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, product: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, product: payload };
    default:
      return state;
  }
};
