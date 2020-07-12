import {GET_INGREDIENTS} from "../constants/action-types";

const getIngredients = (payload) => {
    return {
        type: GET_INGREDIENTS,
        payload
    }
};

export {getIngredients};