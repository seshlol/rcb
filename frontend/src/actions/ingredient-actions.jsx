import {GET_INGREDIENTS} from "../constants/action-types";

export const getIngredients = (payload) => {
    return {
        type: GET_INGREDIENTS,
        payload
    }
};