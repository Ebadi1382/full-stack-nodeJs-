import axios from "axios";

export const productDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
    dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
