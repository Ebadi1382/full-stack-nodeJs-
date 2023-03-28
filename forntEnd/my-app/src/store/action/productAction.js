import axios from "axios";

export const productAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("http://localhost:8000/api/products");
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {}
};
