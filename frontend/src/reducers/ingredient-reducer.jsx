import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    SET_INGREDIENT_PAGE
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    name: null,
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
            };
        case GET_INGREDIENTS_SUCCESS:
            const ingredientPages = payload.page === 0 ? [payload.ingredients]
                : [...state.ingredientPages, payload.ingredients];
            return {
                isLoading: false,
                name: payload.name,
                ingredientPages,
                currentPage: payload.page,
                totalPages: payload.totalPages,
                errorMessage: null
            };
        case GET_INGREDIENTS_FAILURE:
            return {
                isLoading: false,
                name: null,
                ingredientPages: [],
                currentPage: null,
                totalPages: null,
                errorMessage: payload.message
            };
        case SET_INGREDIENT_PAGE:
            return {
                ...state,
                currentPage: payload.page
            };
        default:
            return state;
    }
};
