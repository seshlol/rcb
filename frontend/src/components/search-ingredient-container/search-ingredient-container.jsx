import './search-ingredient-container.scss';

import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Row from 'react-grid-system/build/grid/Row';
import Ingredient from '../ingredient/ingredient';


export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <div>
                <Row style={{margin: '0.5rem'}}>
                    <form className={'search-ingredient-form'} onSubmit={this.searchIngredient}>
                        <input className={'search-ingredient-form-input'} placeholder={'ingredient name'}/>
                        <button className={'search-ingredient-form-button'}>
                            <FontAwesomeIcon className={'search-ingredient-form-button-icon'} icon={'search'}/>
                        </button>
                    </form>
                </Row>
                <Row style={{margin: '0.5rem'}}>
                    <div className={'search-ingredient-result'}>
                        <Ingredient/>
                        <Ingredient/>
                        <Ingredient/>
                    </div>
                </Row>
            </div>
        );
    };

    searchIngredient = (evt) => {
        evt.preventDefault();

        console.log('search button clicked!');
    }
}


