import { combineReducers, createStore } from 'redux';
import cartReducer from './reducer/cart';
import authorReducer from './reducer/author';

const allReducer = combineReducers({myCart: cartReducer, authors: authorReducer})

const store = createStore(allReducer);

export default store;
