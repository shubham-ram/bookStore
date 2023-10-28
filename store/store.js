import { combineReducers, createStore } from 'redux';
import cartReducer from './reducer/cart';

const allReducer = combineReducers({myCart: cartReducer})

const store = createStore(allReducer);

export default store;
