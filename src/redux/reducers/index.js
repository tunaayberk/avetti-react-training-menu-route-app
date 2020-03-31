import demoReducer from "./demoReducer";
import categoryReducer from "./categoryReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  demoReducer,
  categoryReducer
});

export default allReducers;
