import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    SET_INGREDIENT_PAGE,
    SHOW_INGREDIENT_DESCRIPTION
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    name: null,
    ingredientPages: [],
    visibleIngredients: [],
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
                ingredientPages: ingredientPages,
                visibleIngredients: payload.ingredients,
                currentPage: payload.page,
                totalPages: payload.totalPages,
                errorMessage: null
            };
        case GET_INGREDIENTS_FAILURE:
            return {
                isLoading: false,
                name: null,
                ingredientPages: [],
                visibleIngredients: [],
                currentPage: null,
                totalPages: null,
                errorMessage: payload.message
            };
        case SET_INGREDIENT_PAGE:
            return {
                ...state,
                visibleIngredients: state.ingredientPages[payload.page],
                currentPage: payload.page
            };
        case SHOW_INGREDIENT_DESCRIPTION:
            const styledIngredients = state.visibleIngredients.map(
                (ingredient) => {
                    const isExpanded = ingredient.isExpanded === undefined ?
                        payload.id === ingredient.id : undefined;
                    return {
                        ...ingredient,
                        isExpanded
                    };
                }
            );
            return {
                ...state,
                visibleIngredients: styledIngredients
            };
        default:
            return state;
    }
};
