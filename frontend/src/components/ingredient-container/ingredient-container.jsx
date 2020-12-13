import * as React from 'react';
import {Fragment} from 'react';
import IngredientContainerSearch from '../ingredient-container-search/ingredient-container-search';
import IngredientContainerResult from '../ingredient-container-result/ingredient-container-result';
import IngredientContainerNavigation from "../ingredient-container-navigation/ingredient-container-navigation";
import './ingredient-container.scss';

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
