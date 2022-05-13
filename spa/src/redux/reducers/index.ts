import { combineReducers } from "redux";
import navReducer from "./nav";
import basicsReducer from "./basics";

const rootReducer = combineReducers({
  nav: navReducer,
  basics: basicsReducer,
});

export default rootReducer;
