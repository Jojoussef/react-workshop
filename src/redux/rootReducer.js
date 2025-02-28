import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

// Import your individual reducers here
// import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  todos: todoReducer,
});

export default rootReducer;
