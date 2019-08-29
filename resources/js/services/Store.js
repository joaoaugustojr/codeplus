import { createStore } from 'redux';
import element from '../reducers/redCrud';

const store = createStore(element);

export default store;
