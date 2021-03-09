/**
* @file sagas.ts
* @date 2021-03-09
* @author zhoubin
* @lastModify  2021-03-09
*/

import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from './types'
import { addTodoAction, changeTodoAction, deleteTodoAction } from './actions'


/**
 * async add an new todo
 * @param {type,todoItem}
 * */
function* handleAddTodo(action) {
    const { todoItem } = action;
    yield put(addTodoAction(todoItem));
}

/**
 * async change todo
 * @param {type,todoItem}
 * */
function* handleChangeTodo(action) {
    const { todoItem } = action;
    yield put(changeTodoAction(todoItem));
}

/**
 * async delete todo
 * */
function* handleDeleteTodo() {
    yield put(deleteTodoAction());
}

/**
 * watching todoList fetch async request
 * */
function* watchTodoListAsyncTasks() {
    yield takeLatest(types.ACTION_TYPE.ADD_TODO_ASYNC, handleAddTodo);
    yield takeLatest(types.ACTION_TYPE.CHANGE_TODO_ASYNC, handleChangeTodo);
    yield takeLatest(types.ACTION_TYPE.DELETE_TODO_ASYNC, handleDeleteTodo);
}


const sagas = [fork(watchTodoListAsyncTasks)];
export default sagas;