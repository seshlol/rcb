import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import Col from 'react-grid-system/build/grid/Col';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient-container-navigation.scss';
import {getIngredients} from '../../actions/ingredient-actions';

class IngredientContainerNavigation extends React.Component {

    render = () => {
        const {currentPage, totalPages} = this.props;
        return (
            <Row style={{margin: '0.5rem', height: 'calc(2rem + 2px)'}}>
                <Col xs={2} style={{padding: 0}}>
                    {this.renderFirstPageButton(currentPage)}
                </Col>
                <Col xs={2} offset={{xs: 6}} style={{padding: 0, right: '1%'}}>
                    {this.renderPreviousPageButton(currentPage)}
                </Col>
                <Col xs={2} style={{padding: 0}}>
                    {this.renderNextPageButton(currentPage, totalPages)}
                </Col>
            </Row>
        );
    };

    renderFirstPageButton = (currentPage) => {
        return currentPage > 0 ? (
                <button className={'ingredient-container-navigation-button ingredient-container-navigation-button-first'}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-double-left']}/>
                </button>
            )
            : null;
    };

    renderPreviousPageButton = (currentPage) => {
        return currentPage > 0 ? (
                <button
                    className={'ingredient-container-navigation-button ingredient-container-navigation-button-previous'}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-left']}/>
                </button>
            )
            : null;
    };

    renderNextPageButton = (currentPage, totalPages) => {
        console.log("currentPage", currentPage);
        console.log("totalPages", totalPages);
        return currentPage < totalPages ? (
                <button
                    className={'ingredient-container-navigation-button ingredient-container-navigation-button-next'}
                    onClick={this.handleNextButtonClick}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-right']}/>
                </button>
            )
            : null;
    };

    handleNextButtonClick = () => {
        console.log(this.state);
        console.log(this.props);
        this.props.getIngredients(this.state.name, this.props.currentPage + 1);
    };
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.ingredientReducer.currentPage,
        totalPages: state.ingredientReducer.totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientContainerNavigation);
