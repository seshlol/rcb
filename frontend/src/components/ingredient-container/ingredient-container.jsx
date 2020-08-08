import * as React from 'react';
import IngredientContainerSearch from '../ingredient-container-search/ingredient-container-search';
import IngredientContainerResult from '../ingredient-container-result/ingredient-container-result';
import './ingredient-container.scss';

export default class IngredientContainer extends React.Component {

    render = () => {
        return (
            <div>
                <IngredientContainerSearch/>
                <IngredientContainerResult/>
            </div>
        );
    };
}
