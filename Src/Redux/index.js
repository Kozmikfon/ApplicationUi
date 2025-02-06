import {combineReducers, createStore} from 'redux';
import userReducer from './reducer/userReducer';

const reducer = combineReducers({userReducer: userReducer});
const store = createStore(reducer);
export default store;
