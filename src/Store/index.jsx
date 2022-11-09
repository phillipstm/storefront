import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import purchasesReducer from './Categories.jsx';
import productsReducer from './Products.jsx';

let reducers = combineReducers({
    purchases: purchasesReducer,
    categories: productsReducer

});

export default function store(){
    return createStore(reducers, composeWithDevTools());
}