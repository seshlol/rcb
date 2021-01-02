import * as React from 'react';
import {Fragment} from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {showIngredientDescription} from '../../actions/ingredient-actions';
import {connect} from 'react-redux';
import './ingredient.scss';

class Ingredient extends React.Component {

    render = () => {
        const {imgSrc, imgAlt, name, description, isExpanded, zIndex} = this.props.ingredient;
        const primaryStyle = 'ingredient-container-result-primary';
        const primaryStyleClass = isExpanded === false ? `${primaryStyle} ${primaryStyle}-hidden`
            : primaryStyle;
        const descriptionStyle = 'ingredient-container-result-description';
        const descriptionStyleClass = isExpanded ? `${descriptionStyle} ${descriptionStyle}-hidden`
            : `${descriptionStyle}-hidden`;
        return (
            <Fragment>
                <Row className={primaryStyleClass}>
                    <div className={'ingredient-container-result-primary-item'}
                         style={{zIndex: zIndex}}
                         onClick={this.handleClickExpand}>
                        <div className={'ingredient-container-result-primary-item-logo'}>
                            {this.renderImgOrIcon(imgSrc, imgAlt)}
                        </div>
                        <div className={'ingredient-container-result-primary-item-info'}>
                            <div className={'ingredient-container-result-primary-item-info-name'}>
                                {name}
                            </div>
                            <div className={'ingredient-container-result-primary-item-info-actions'}>
                                <FontAwesomeIcon
                                    className={'ingredient-container-result-primary-item-info-actions-item-add'}
                                    icon={['fas', 'plus-square']}/>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className={descriptionStyleClass}>
                    <div className={'ingredient-container-result-description-item'}>
                        {description}
                    </div>
                </Row>
            </Fragment>
        );
    };

    renderImgOrIcon = (imgSrc, imgAlt) => {
        return imgSrc ? (
                <img className={'ingredient-container-result-primary-item-logo-img'}
                     src={imgSrc}
                     alt={imgAlt}/>
            )
            : (
                <FontAwesomeIcon className={'ingredient-container-result-primary-item-logo-alt'}
                                 icon={['fas', 'camera']}/>
            );
    };

    handleClickExpand = () => {
        const {id} = this.props.ingredient;
        this.props.showIngredientDescription(id);
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        showIngredientDescription: (id) => dispatch(showIngredientDescription(id)),
    }
};

export default connect(null, mapDispatchToProps)(Ingredient);


