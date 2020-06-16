import './search-ingredient-container.scss';

import * as React from 'react';

import Row from 'react-grid-system/build/grid/Row'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <div className='logic-block'>
                <Row style={{margin: '0.5rem'}}>
                    <input/>
                </Row>
            </div>
        );
    };
}


