import './search-ingredient-container.scss';

import * as React from 'react';

import Row from 'react-grid-system/build/grid/Row'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <div className='search-ingredient-container' onSubmit={this.searchIngredient}>
                <Row style={{margin: '0.5rem'}}>
                    <form className={'search-ingredient-form'}>
                        <input className={'search-ingredient-form-input'}/>
                        <button className={'search-ingredient-form-button'}>
                            <FontAwesomeIcon icon='search'/>
                        </button>
                    </form>
                </Row>
            </div>
        );
    };

    searchIngredient = (evt) => {
        evt.preventDefault();
    }
}


