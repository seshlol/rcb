import {GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_STARTED, GET_INGREDIENTS_SUCCESS} from '../constants/action-types';

const initialState = {
    isLoading: false,
    ingredients: [],
    currentPage: null,
    pagesAvailable: null,
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
        default:
            return state;
    }
};
