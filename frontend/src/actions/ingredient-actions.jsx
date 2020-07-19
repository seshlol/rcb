import {
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,
    GET_MORE_INGREDIENTS
} from '../constants/action-types';
import IngredientService from '../services/ingredient-service';

export const getIngredients = (ingredientName) => {
    return (dispatch) => {
        dispatch(getIngredientsStarted());

        setTimeout(() => {
            const rand = Math.random();
            if (rand > 0.5) {
                dispatch(getIngredientsSuccess(IngredientService.getIngredients(ingredientName)))
            } else {
                dispatch(getIngredientsFailure('Internal server error'));
            }
        }, 2000);

        // axios
        //     .get(
        //         '/ingredients',
        //         {params: {ingredientName}}
        //     )
        //     .then((response) => {
        //         dispatch(getIngredientsSuccess(response.data))
        //     })
        //     .catch((error) => {
        //         dispatch(getIngredientsFailure(error.message))
        //     });
    }
};

const getIngredientsStarted = () => {
    return {
        type: GET_INGREDIENTS_STARTED
    }
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
    }
};

export const getMoreIngredients = (payload) => {
    return {
        type: GET_MORE_INGREDIENTS,
        payload
    }
};
