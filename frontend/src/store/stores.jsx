import {createStore} from 'redux';
import {ingredientReducer} from '../reducers/ingredient-reducer';

const ingredientStore = createStore(ingredientReducer);

export {ingredientStore};