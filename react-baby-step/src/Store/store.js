import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer.js';


const store = createStore(rootReducer);

export default store;