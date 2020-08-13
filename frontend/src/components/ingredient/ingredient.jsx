import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';

export default class Ingredient extends React.Component {

    render = () => {
        const {imgSrc, imgAlt, name} = this.props.ingredient;
        return (
            <Row style={{margin: '0 0 0.25rem 0'}}>
                <div className={'ingredient-container-result-item'}>
                    <div className={'ingredient-container-result-item-logo'}>
                        {this.renderImgOrIcon(imgSrc, imgAlt)}
                    </div>
                    <div className={'ingredient-container-result-item-info'}>
                        <div className={'ingredient-container-result-item-info-name'}>
                            {name}
                        </div>
                        <div className={'ingredient-container-result-item-info-actions'}>
                            <FontAwesomeIcon className={'ingredient-container-result-item-info-actions-item'}
                                             icon={['far', 'plus-square']}/>
                        </div>
                    </div>
                </div>
            </Row>
        );
    };

    renderImgOrIcon = (imgSrc, imgAlt) => {
        return imgSrc ? (
                <img className={'ingredient-container-result-item-logo-img'}
                     src={imgSrc}
                     alt={imgAlt}/>
            )
            : (
                <FontAwesomeIcon className={'ingredient-container-result-item-logo-alt'}
                                 icon={['fas', 'camera']}/>
            );
    }
}


