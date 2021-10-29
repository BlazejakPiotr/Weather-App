import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducer";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  data: {},
  isLoading: false,
  bg: "",
};

const configureStore = createStore(
  appReducer,
  initialState,
  composeEnchancers(applyMiddleware(thunk))
);

export default configureStore;
