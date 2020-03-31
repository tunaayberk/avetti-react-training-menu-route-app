import { createStore, applyMiddleware, compose } from "redux";
import allReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
