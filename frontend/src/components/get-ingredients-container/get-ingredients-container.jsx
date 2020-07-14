import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './get-ingredients-container.scss';

export default class GetIngredientsContainer extends React.Component {

    render = () => {
        return (
            <div>
                <Row style={{margin: '0.5rem'}}>
                    <form className={'get-ingredients-form'}
                          onSubmit={this.getIngredients}>
                        <input className={'get-ingredients-form-input'}
                               placeholder={'ingredient name'}/>
                        <button className={'get-ingredients-form-button'}>
                            <FontAwesomeIcon className={'get-ingredients-form-button-icon'}
                                             icon={['fas', 'search']}/>
                        </button>
                    </form>
                </Row>
                <Row style={{margin: '0.5rem'}}>
                    <div className={'get-ingredients-result'}>
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

    getIngredients = (evt) => {
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


