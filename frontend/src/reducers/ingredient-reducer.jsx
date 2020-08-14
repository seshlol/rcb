import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    ingredientPages: [],
    currentPage: null,
    totalPages: null,
    errorMessage: null
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_INGREDIENTS_STARTED:
            return {
                ...state,
                isLoading: true,
                ingredientPages: [],
                errorMessage: null
            };
        case GET_INGREDIENTS_SUCCESS:
            const ingredientPages = payload.page === 0 ?
                [payload.ingredients]
                : [...state.ingredientPages, payload.ingredients]
            return {
                ...state,
                isLoading: false,
                ingredientPages: ingredientPages,
                currentPage: payload.page,
                totalPages: payload.totalPages,
                errorMessage: null
            };
        case GET_INGREDIENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                ingredientPages: [],
                currentPage: null,
                totalPages: null,
                errorMessage: payload.message
            };
        default:
            return state;
    }
};
