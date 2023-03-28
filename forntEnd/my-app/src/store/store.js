import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { productDetailReducer } from "./reducer/productDetailReducer";
import { productReducer } from "./reducer/productReducer";
// import { composeWithDevTools } from '@redux-devtools/extension';

const reducers = combineReducers({
  product: productReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
const middleWere = [thunk];
const cartItemFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];
const initialState = {
  cart: { cartItem: cartItemFromLocalStorage },
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWere)
  // composeWithDevTools
);

export default store;
