import axios from '../api/axios'
import {
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE
} from '../constants/action-types';

export const getIngredients = (name, page = 0) => {
    return (dispatch) => {
        dispatch(getIngredientsStarted());

        setTimeout(() => {
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
        }, 500);

        // axios
        //     .get(
        //         '/constructor/ingredients',
        //         {
        //             params: {name, page}
        //         }
        //     )
        //     .then((response) => {
        //         dispatch(getIngredientsSuccess({...response.data, name, page}))
        //     })
        //     .catch((error) => {
        //         dispatch(getIngredientsFailure(error.response.data))
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

