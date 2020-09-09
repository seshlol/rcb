import * as React from 'react';
import {Fragment} from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';
import {showIngredientDescription} from '../../actions/ingredient-actions';
import {connect} from 'react-redux';

class Ingredient extends React.Component {

    render = () => {
        const {imgSrc, imgAlt, name, description, isExpanded} = this.props.ingredient;
        const rowStyle = 'ingredient-container-result-row1';
        const styledClass = isExpanded === false ?
            `${rowStyle} ${rowStyle}-hidden`
            : rowStyle;
        return (
            <Fragment>
                <Row className={styledClass}>
                    <div className={'ingredient-container-result-row1-item'}
                         onClick={this.handleClickExpand}>
                        <div className={'ingredient-container-result-row1-item-logo'}>
                            {this.renderImgOrIcon(imgSrc, imgAlt)}
                        </div>
                        <div className={'ingredient-container-result-row1-item-info'}>
                            <div className={'ingredient-container-result-row1-item-info-name'}>
                                {name}
                            </div>
                            <div className={'ingredient-container-result-row1-item-info-actions'}>
                                <FontAwesomeIcon
                                    className={'ingredient-container-result-row1-item-info-actions-item-add'}
                                    icon={['fas', 'plus-square']}/>
                            </div>
                        </div>
                    </div>
                </Row>
                {isExpanded ?
                    <Row className={'ingredient-container-result-row2-hidden ingredient-container-result-row2'}>
                        <div className={'ingredient-container-result-row2-description'}>
                            {description}
                        </div>
                    </Row>
                    : null}
            </Fragment>
        );
    };

    renderImgOrIcon = (imgSrc, imgAlt) => {
        return imgSrc ? (
                <img className={'ingredient-container-result-row1-item-logo-img'}
                     src={imgSrc}
                     alt={imgAlt}/>
            )
            : (
                <FontAwesomeIcon className={'ingredient-container-result-row1-item-logo-alt'}
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


