import * as React from 'react';
import {Fragment} from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';
import {showIngredientDescription} from '../../actions/ingredient-actions';
import {connect} from 'react-redux';

class Ingredient extends React.Component {

    render = () => {
        const {imgSrc, imgAlt, name, isExpanded} = this.props.ingredient;
        const styledClass = isExpanded === false ?
            'ingredient-container-result-row ingredient-container-result-row-hidden'
            : 'ingredient-container-result-row';
        return (
            <Fragment>
                <Row className={styledClass}>
                    <div className={'ingredient-container-result-row-item'}>
                        <div className={'ingredient-container-result-row-item-logo'}>
                            {this.renderImgOrIcon(imgSrc, imgAlt)}
                        </div>
                        <div className={'ingredient-container-result-row-item-info'}>
                            <div className={'ingredient-container-result-row-item-info-name'}>
                                {name}
                            </div>
                            <div className={'ingredient-container-result-row-item-info-actions'}>
                                <FontAwesomeIcon
                                    className={'ingredient-container-result-row-item-info-actions-item-expand'}
                                    onClick={this.handleClickExpand}
                                    icon={['fas', 'info-circle']}/>
                                <FontAwesomeIcon
                                    className={'ingredient-container-result-row-item-info-actions-item-add'}
                                    icon={['fas', 'plus-square']}/>
                            </div>
                        </div>
                    </div>
                </Row>
                {isExpanded ? <div>description</div> : null}
            </Fragment>
        );
    };

    renderImgOrIcon = (imgSrc, imgAlt) => {
        return imgSrc ? (
                <img className={'ingredient-container-result-row-item-logo-img'}
                     src={imgSrc}
                     alt={imgAlt}/>
            )
            : (
                <FontAwesomeIcon className={'ingredient-container-result-row-item-logo-alt'}
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


