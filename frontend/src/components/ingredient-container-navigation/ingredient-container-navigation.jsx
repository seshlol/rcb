import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import Col from 'react-grid-system/build/grid/Col';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient-container-navigation.scss';

class IngredientContainerNavigation extends React.Component {

    render = () => {
        const {currentPage, pagesAvailable} = this.props;
        return (
            <Row style={{margin: '0.5rem', height: 'calc(2rem + 2px)'}}>
                <Col xs={2} style={{padding: 0}}>
                    {this.renderFirstPageButton(currentPage)}
                </Col>
                <Col xs={2} offset={{xs: 6}} style={{padding: 0, right: '1%'}}>
                    {this.renderPreviousPageButton(currentPage)}
                </Col>
                <Col xs={2} style={{padding: 0}}>
                    {this.renderNextPageButton(currentPage, pagesAvailable)}
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

    renderNextPageButton = (currentPage, pagesAvailable) => {
        return currentPage < pagesAvailable ? (
                <button
                    className={'ingredient-container-navigation-button ingredient-container-navigation-button-next'}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-right']}/>
                </button>
            )
            : null;
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.ingredientReducer.currentPage,
        availablePages: state.ingredientReducer.pagesAvailable
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientContainerNavigation);
