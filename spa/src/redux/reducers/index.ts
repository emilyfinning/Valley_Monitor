import { combineReducers } from "redux";
import navReducer from "./nav";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;
