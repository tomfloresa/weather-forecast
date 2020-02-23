import { combineReducers } from "redux";

// Reducers
import loaderReducer from "./loaderReducer";

export default combineReducers({
  loader: loaderReducer
});
