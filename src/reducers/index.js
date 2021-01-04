import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//whatever name to signify the combining of reducers

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
