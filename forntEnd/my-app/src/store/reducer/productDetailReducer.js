export const productDetailReducer = (state = { productDetail: {} }, { type, payload }) => {
  switch (type) {
    case "PRODUCT_DETAIL_REQUEST":
      return { loading: true, ...state };
    case "PRODUCT_DETAIL_SUCCESS":
      return { loading: false, productDetail: payload };
    default:
      return state;
  }
};
