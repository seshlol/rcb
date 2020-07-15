import {GET_INGREDIENTS, GET_MORE_INGREDIENTS} from "../constants/action-types";

export const getIngredients = (payload) => {
    return {
        type: GET_INGREDIENTS,
        payload
    }
};

export const getMoreIngredients = (payload) => {
    return {
        type: GET_MORE_INGREDIENTS,
        payload
    }
};
