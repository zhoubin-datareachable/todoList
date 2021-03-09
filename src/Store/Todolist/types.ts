/**
* @file type.ts
* @date 2021-03-06
* @author zhoubin
* @lastModify  2021-03-06
*/

export enum ACTION_TYPE { ADD_TODO = 'ADD_TODO', ADD_TODO_ASYNC = 'ADD_TODO_ASYNC', CHANGE_TODO = 'CHANGE_TODO', CHANGE_TODO_ASYNC = 'CHANGE_TODO_ASYNC', DELETE_TODO = 'DELETE_TODO', DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC' }

/**
 * this interface describes each item of data in todolist
 * @param {string} id id of todoItem
 * @param {string} content content of todoItem
 * @param {string} done is it complete
 */
interface TodoItemType {
    id: string;
    content: string;
    done: boolean;
}

export type { TodoItemType }

/**
 * This action will add a new todoItem
 * @param {TodoItemType} payload.todoItem new todoItem
 */
interface AddTodoAction {
    type: typeof ACTION_TYPE.ADD_TODO;
    payload: {
        todoItem: TodoItemType
    }
}



/**
 * This action will change todoItem
 * @param {TodoItemType} payload.todoItem will change todoItem
 */
interface changeTodoAction {
    type: typeof ACTION_TYPE.CHANGE_TODO;
    payload: {
        todoItem: TodoItemType
    }
}


/**
 * This action will delete todoItem
 * @param {TodoItemType} payload.todoItem will delete todoItem
 */
interface deleteTodoAction {
    type: typeof ACTION_TYPE.DELETE_TODO;
    payload: {
    }
}


export type TodoListActionTypes = AddTodoAction | changeTodoAction | deleteTodoAction;

/** 
 * This file is a todolistreducer file
 * @param { TodoItemType } todoList todoList
 */
export interface TodoListReducer {
    todoList: Array<TodoItemType>;
}