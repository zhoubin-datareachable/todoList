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

// import { combineReducers } from 'redux';

// // import demoReducer from './moduleA/reducer';
// import todoReducer from './moduleA/reducer';

// // combine all the reducer in here
// const rootReducer = combineReducers({
//     todoReducer: todoReducer
// });
// // export the root reducer state
// export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
