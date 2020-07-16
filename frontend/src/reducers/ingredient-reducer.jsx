import {GET_INGREDIENTS_STARTED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE, GET_MORE_INGREDIENTS} from "../constants/action-types";

const initialState = {
    ingredients: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_INGREDIENTS_STARTED:
            return {isLoading: true};
        case GET_INGREDIENTS_SUCCESS:
            return {...state, ingredients: payload};
        case GET_MORE_INGREDIENTS:
            return {...state, ingredients: state.ingredients.concat(payload)};
        default:
            return state;
    }
};
