import axios from '../api/axios'
import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    SET_INGREDIENT_PAGE
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
            .catch((error) => {
                dispatch(getIngredientsFailure(error.response.data))
            });
    }
};

export const setIngredientPage = (page) => {
    const payload = {page};
    return {
        type: SET_INGREDIENT_PAGE,
        payload
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

