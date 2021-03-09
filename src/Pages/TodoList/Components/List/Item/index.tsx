/**
* @file index.tsx
* @date 2021-03-06
* @author zhoubin
* @lastModify  2021-03-06
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import * as types from "../../../../../Store/Todolist/types"
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/**
 * this interface describes the value passed from the list
 * @param {string} id id of todoItem
 * @param {string} content content of todoItem
 * @param {string} done is it complete
 */

interface todoProps {
    todo: {
        id: string,
        content: string,
        done: boolean
    }
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Item: React.FC<todoProps> = ({ todo }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /**
     * is it in editing status
     * @constant
     * @type {boolean}
     *
     */
    const [isEdit, SetIsEdit] = useState(false);
    const dispatch = useDispatch();
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * Change task completion status
     */
    const selectTodo = () => {
        todo.done = !todo.done;
        dispatch({ type: types.ACTION_TYPE.CHANGE_TODO_ASYNC, todoItem: todo })
    }

    /**
     * Change the content of todoitem
     * @param {HTMLInputElement} e - Input object
     */
    const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        todo.content = e.target.value;
        dispatch({ type: types.ACTION_TYPE.CHANGE_TODO_ASYNC, todoItem: todo })
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <div>
                <span onClick={selectTodo} onDoubleClick={() => SetIsEdit(true)} style={{ background: todo.done ? '#ccc' : '', display: !isEdit ? 'block' : 'none' }}>{todo.content}</span>
                <input onChange={changeContent} onBlur={() => SetIsEdit(false)} type="text" style={{ display: isEdit ? 'block' : 'none' }} value={todo.content} />
            </div>
        </Row>
    );
};
export default Item;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */