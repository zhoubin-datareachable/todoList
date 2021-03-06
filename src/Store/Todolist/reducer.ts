/**
* @file reducer.ts
* @date 2021-03-06
* @author zhoubin
* @lastModify  2021-03-06
*/

import * as type from "./types";

const initState: type.TodoListReducer = {
    todoList: [
        { id: "000001", content: '吃饭', done: false },
        { id: "000002", content: '睡觉', done: false },
        { id: "000003", content: '敲代码', done: false }
    ]
}

export default (
    state = initState,
    action: type.TodoListActionTypes
): type.TodoListReducer => {
    switch (action.type) {
        case type.ACTION_TYPE.ADD_TODO:
            return {
                todoList: [...state.todoList, action.payload.todoItem]
            };
        case type.ACTION_TYPE.CHANGE_TODO:
            return {
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.todoItem.id) {
                        return {
                            ...todo,
                            content: action.payload.todoItem.content,
                            done: action.payload.todoItem.done
                        }
                    } else {
                        return {
                            ...todo
                        }
                    }
                })
            }
        case type.ACTION_TYPE.DELETE_TODO:
            return {
                todoList: state.todoList.filter(todo => {
                    return todo.done === false;
                })
            }
        default:
            return state;
    }
}