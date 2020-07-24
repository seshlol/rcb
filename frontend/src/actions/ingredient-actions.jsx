import {
    GET_INGREDIENTS_STARTED,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,
    GET_MORE_INGREDIENTS
} from '../constants/action-types';

export const getIngredients = (ingredientName) => {
    return (dispatch) => {
        dispatch(getIngredientsStarted());

        // axios
        //     .get(
        //         '/constructor/ingredients',
        //         {params: {ingredientName}}
        //     )
        //     .then((response) => {
        //         dispatch(getIngredientsSuccess(response.data))
        //     })
        //     .catch((error) => {
        //         dispatch(getIngredientsFailure(error.message))
        //     });

        setTimeout(() => {
            const rand = Math.random();
            if (rand > 0.5) {
                dispatch(getIngredientsSuccess(
                    [
                        {
                            id: '265',
                            name: "Wagyu",
                            imgSrc: "./img/ingredients/cow-meat.png",
                            imgAlt: "cow meat"
                        },
                        {
                            id: '7266',
                            name: "Chicken egg",
                            imgSrc: "./img/ingredients/chicken-egg.png",
                            imgAlt: "super white giant chicken egg"
                        },
                        {
                            id: '4887',
                            name: "Black bread",
                            imgAlt: "black bread"
                        },
                        {
                            id: '9387',
                            name: "Tomato",
                            imgSrc: "./img/ingredients/tomato.png",
                            imgAlt: "thesuperiest tomato"
                        },
                        {
                            id: '112',
                            name: "Thymeleaf",
                            imgSrc: "",
                            imgAlt: "thymeleaf"
                        },
                        {
                            id: '214',
                            name: "Salmon",
                            imgSrc: "./img/ingredients/Salmon.png",
                            imgAlt: "salmon"
                        }
                    ]
                ))
            } else {
                dispatch(getIngredientsFailure('Internal server error'));
            }
        }, 1000);

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
