/**
 * file: root store
 * date: 2020-08-28
 * author: Frank
 * lastModify: Frank 2020-08-28
 */
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer)

export default store;
