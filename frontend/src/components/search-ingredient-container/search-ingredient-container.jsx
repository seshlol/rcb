import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Ingredient from '../ingredient/index';

import './search-ingredient-container.scss';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <div>
                <Row style={{margin: '0.5rem'}}>
                    <form className={'search-ingredient-form'} onSubmit={this.searchIngredients}>
                        <input className={'search-ingredient-form-input'} placeholder={'ingredient name'}/>
                        <button className={'search-ingredient-form-button'}>
                            <FontAwesomeIcon className={'search-ingredient-form-button-icon'} icon={['fas', 'search']}/>
                        </button>
                    </form>
                </Row>
                <Row style={{margin: '0.5rem'}}>
                    <div className={'search-ingredient-result'}>
                        <Ingredient/>
                        <Ingredient/>
                        <Ingredient/>
                        <Ingredient/>
                        <Ingredient/>
                        <Ingredient/>
                    </div>
                </Row>
            </div>
        );
    };

    searchIngredients = (evt) => {
        evt.preventDefault();

        return [
            {
                ingredientImageSrc: "./img/ingredients/cow-meat.png",
                ingredientImageAlt: "cow meat",
                ingredientName: "Wagyu"
            },
            {
                ingredientImageSrc: "./img/ingredients/chicken-egg.png",
                ingredientImageAlt: "white chicken egg",
                ingredientName: "Chicken egg"
            },
            {
                ingredientImageAlt: "black bread",
                ingredientName: "Black bread"
            },
            {
                ingredientImageSrc: "./img/ingredients/tomato.png",
                ingredientImageAlt: "tomato",
                ingredientName: "Tomato"
            },
            {
                ingredientImageSrc: "",
                ingredientImageAlt: "thymeleaf",
                ingredientName: "Thymeleaf"
            },
            {
                ingredientImageSrc: "./img/ingredients/Salmon.png",
                ingredientImageAlt: "salmon",
                ingredientName: "Salmon"
            }
        ];
    }
}


