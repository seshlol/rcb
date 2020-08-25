import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';
import {showIngredientDescription} from '../../actions/ingredient-actions';
import {connect} from 'react-redux';

class Ingredient extends React.Component {

    render = () => {
        const {id, imgSrc, imgAlt, name} = this.props.ingredient;
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
                            <FontAwesomeIcon className={'ingredient-container-result-item-info-actions-item-expand'}
                                             onClick={(id) => this.handleClickExpand(id)}
                                             icon={['fas', 'info-circle']}/>
                            <FontAwesomeIcon className={'ingredient-container-result-item-info-actions-item-add'}
                                             icon={['fas', 'plus-square']}/>
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
    };

    handleClickExpand = (id) => {
        this.props.showIngredientDescription(id);
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        showIngredientDescription: (id) => dispatch(showIngredientDescription(id)),
    }
};

export default connect(null, mapDispatchToProps)(Ingredient);


