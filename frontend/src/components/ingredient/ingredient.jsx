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
        const row1Style = 'ingredient-container-result-row1';
        const styledRow1Class = isExpanded === false ? `${row1Style} ${row1Style}-hidden` : row1Style;
        const row2Style = 'ingredient-container-result-row2';
        const styledRow2Class = isExpanded ? `${row2Style} ${row2Style}-hidden` : `${row2Style}-hidden`;
        return (
            <Fragment>
                <Row className={styledRow1Class}>
                    <div className={'ingredient-container-result-row1-item'}
                         style={{zIndex: zIndex}}
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
                <Row className={styledRow2Class}>
                    <div className={'ingredient-container-result-row2-description'}>
                        {description}
                    </div>
                </Row>
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


