import * as React from 'react';
import IngredientContainerSearch from '../ingredient-container-search/ingredient-container-search';
import IngredientContainerResult from '../ingredient-container-result/ingredient-container-result';
import './ingredient-container.scss';
import IngredientContainerNavigation from "../ingredient-container-navigation/ingredient-container-navigation";
import {Fragment} from "react";

export default class IngredientContainer extends React.Component {

    render = () => {
        return (
            <Fragment>
                <IngredientContainerSearch/>
                <IngredientContainerResult/>
                <IngredientContainerNavigation/>
            </Fragment>
        );
    };
}
