/**
* @file index.tsx
* @date 2021-03-06
* @author zhoubin
* @lastModify  2021-03-06
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import Item from './Item'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const List = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    const todolistState = useSelector(
        (state: RootState) => state.todolistReducer.todoList
    );

    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            {
                todolistState.map(todo => {
                    return <Item key={todo.id} todo={todo} />
                })
            }
        </Row>
    );
};
export default List;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */