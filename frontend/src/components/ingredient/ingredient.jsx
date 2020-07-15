import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';

export default class Ingredient extends React.Component {

    render = () => {
        const {ingredientImageSrc, ingredientImageAlt, ingredientName} = this.props.ingredient;
        return (
            <Row style={{margin: '0 0 0.25rem 0'}}>
                <div className={'ingredients-result-item'}>
                    <div className={'ingredients-result-item-logo'}>
                        {/*<img/>*/}
                        <FontAwesomeIcon className={'ingredients-result-item-logo-icon'}
                                         icon={['far', 'image']}/>
                    </div>
                    <div className={'ingredients-result-item-info'}>
                        <div className={'ingredients-result-item-info-name'}>
                            {ingredientName}
                        </div>
                        <div className={'ingredients-result-item-info-actions'}>
                            <FontAwesomeIcon className={'ingredients-result-item-info-actions-item'}
                                             icon={['far', 'plus-square']}/>
                        </div>
                    </div>
                </div>
            </Row>
        );
    };
}


