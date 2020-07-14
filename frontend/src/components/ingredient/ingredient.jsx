import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';

export default class Ingredient extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0 0 0.25rem 0'}}>
                <div className={'search-ingredient-result-item'}>
                    <div className={'search-ingredient-result-item-logo'}>
                        {/*<img/>*/}
                        <FontAwesomeIcon className={'search-ingredient-result-item-logo-icon'}
                                         icon={['far', 'image']}/>
                    </div>
                    <div className={'search-ingredient-result-item-info'}>
                        <div className={'search-ingredient-result-item-info-name'}>

                        </div>
                        <div className={'search-ingredient-result-item-info-actions'}>
                            <FontAwesomeIcon className={'search-ingredient-result-item-info-actions-item'}
                                             icon={['far', 'plus-square']}/>
                        </div>
                    </div>
                </div>
            </Row>
        );
    };
}


