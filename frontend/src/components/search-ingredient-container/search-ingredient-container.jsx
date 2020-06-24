import './search-ingredient-container.scss';

import * as React from 'react';

import Row from 'react-grid-system/build/grid/Row'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
            </div>
        );
    };

    searchIngredient = (evt) => {
        evt.preventDefault();

        console.log('search button clicked!');
    }
}


