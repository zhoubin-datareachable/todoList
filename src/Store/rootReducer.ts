/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { combineReducers } from "redux";
import TodolistReducer from "./Todolist/reducer";

const rootReducer = combineReducers({
    todolistReducer: TodolistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
