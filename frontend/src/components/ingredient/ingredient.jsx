import './ingredient.scss';

import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';

export default class Ingredient extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0.25rem'}}>
                <div className={'search-ingredient-result-item'}>
                    <img className={'search-ingredient-result-item-image'}>

                    </img>
                    <div className={'search-ingredient-result-item-name'}>

                    </div>
                    <div className={'search-ingredient-result-item-actions'}>

                    </div>
                </div>
            </Row>
        );
    };
}


