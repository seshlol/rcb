import axios from '../api/axios';
import axiosHandleError from '../api/axios-error-handler';
import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    SET_INGREDIENT_PAGE,
    SHOW_INGREDIENT_DESCRIPTION
} from '../constants/action-types';

export const getIngredients = (name, page = 0) => {
    return (dispatch) => {
        dispatch(getIngredientsStarted());
        axios
            .get(
                '/constructor/ingredients',
                {
                    params: {name, page}
                }
            )
            .then((response) => {
                dispatch(getIngredientsSuccess({...response.data, name, page}))
            })
            .catch((response) => {
                const error = axiosHandleError(response);
                dispatch(getIngredientsFailure(error));
            });
    };
};

const getIngredientsStarted = () => {
    return {
        type: GET_INGREDIENTS_STARTED
    };
};

const getIngredientsSuccess = (payload) => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        payload
    }
};

const getIngredientsFailure = (payload) => {
    return {
        type: GET_INGREDIENTS_FAILURE,
        payload
    };
};

export const setIngredientPage = (page) => {
    const payload = {page};
    return {
        type: SET_INGREDIENT_PAGE,
        payload
    };
};

export const showIngredientDescription = (id) => {
    const payload = {id};
    return {
        type: SHOW_INGREDIENT_DESCRIPTION,
        payload
    };
};
