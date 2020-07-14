import {GET_INGREDIENTS, GET_MORE_INGREDIENTS} from "../constants/action-types";

const initialState = {
    ingredients: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_INGREDIENTS:
            return {...state, ingredients: payload};
        case GET_MORE_INGREDIENTS:
            return {...state, ingredients: state.ingredients.concat(payload)};
        default:
            return state;
    }
};
