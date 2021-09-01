import { combineReducers } from "redux";

import todos from "./todos";

const todoListReducer = combineReducers({ todos });

export default todoListReducer;
