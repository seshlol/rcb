import {GET_INGREDIENTS, GET_MORE_INGREDIENTS} from "../constants/action-types";

const getIngredients = (payload) => {
    return {
        type: GET_INGREDIENTS,
        payload
    }
};

const getMoreIngredients = (payload) => {
    return {
        type: GET_MORE_INGREDIENTS,
        payload
    }
};

export {getIngredients};