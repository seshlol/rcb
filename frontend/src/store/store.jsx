import {createStore} from 'redux';
import {ingredientReducer} from '../reducers/index';

const ingredientStore = createStore(ingredientReducer);

export {ingredientStore};