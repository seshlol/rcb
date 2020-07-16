import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,
    GET_MORE_INGREDIENTS
} from '../constants/action-types';
import axios from '../api/axios';
import {serviceGetIngredients} from '../services/ingredient-service';

export const getIngredients = (ingredientName) => {
    return dispatch => {
        dispatch(getIngredientsStarted());
        axios
            .get(
                '/',
                {params: {ingredientName}}
            )
            .then(response => {
                dispatch(getIngredientsSuccess(response.data))
            })
            .catch(error => {
                dispatch(getIngredientsFailure(error.message))
            });
    }
};

const getIngredientsStarted = () => {
    return {
        type: GET_INGREDIENTS_STARTED
    }
};

const getIngredientsSuccess = (ingredients) => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients
    }
};

const getIngredientsFailure = (error) => {
    return {
        type: GET_INGREDIENTS_FAILURE,
        error
    }
};

export const getMoreIngredients = (payload) => {
    return {
        type: GET_MORE_INGREDIENTS,
        payload
    }
};
