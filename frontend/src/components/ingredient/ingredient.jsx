import './ingredient.scss';

import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';

export default class Ingredient extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <img className={'ingredient-image'}>

                </img>
                <div className={'ingredient-name'}>

                </div>
                <div className={'ingredient-actions'}>

                </div>
            </Row>
        );
    };
}


