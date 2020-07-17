import {
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,
    GET_MORE_INGREDIENTS
} from "../constants/action-types";

const initialState = {
    isLoading: false,
    ingredients: [],
    errorMessage: null
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_INGREDIENTS_STARTED:
            return {
                ...state,
                isLoading: true,
                ingredients: [],
                errorMessage: null
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ingredients: payload,
                errorMessage: null
            };
        case GET_INGREDIENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                ingredients: [],
                errorMessage: payload
            };

        case GET_MORE_INGREDIENTS:
            return {...state, ingredients: state.ingredients.concat(payload)};
        default:
            return state;
    }
};
