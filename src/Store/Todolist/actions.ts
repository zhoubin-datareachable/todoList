/**
* @file actions.ts
* @date 2021-03-06
* @author zhoubin
* @lastModify  2021-03-06
*/

import * as types from './types'

/**
 * add an new todo action
 * @param todoItem
 */
const addTodoAction = (
    todoItem: types.TodoItemType
): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.ADD_TODO,
    payload: {
        todoItem,
    },
});


/**
 * change todo action
 * @param todoItem
 */
const changeTodoAction = (
    todoItem: types.TodoItemType
): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.CHANGE_TODO,
    payload: {
        todoItem,
    },
});


/**
 * delete todo action
 * @param todoItem
 */
const deleteTodoAction = (
): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.DELETE_TODO,
    payload: {

    }
});



export { addTodoAction, changeTodoAction, deleteTodoAction };