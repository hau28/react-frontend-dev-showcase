import { combineReducers } from "redux";

import todos from "./todos";
import allTags from "./allTags";

const todoListReducer = combineReducers({ todos, allTags });

export default todoListReducer;
