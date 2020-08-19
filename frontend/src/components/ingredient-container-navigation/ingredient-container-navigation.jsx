import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import Col from 'react-grid-system/build/grid/Col';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient-container-navigation.scss';
import {getIngredients, setIngredientPage} from '../../actions/ingredient-actions';

class IngredientContainerNavigation extends React.Component {

    render = () => {
        const {currentPage, totalPages} = this.props;
        return (
            <Row style={{margin: '0.5rem', height: 'calc(2rem + 2px)'}}>
                <Col xs={2} style={{padding: 0}}>
                    {this.renderFirstPageButton(currentPage)}
                </Col>
                <Col xs={2} offset={{xs: 3}}
                     style={{padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {this.renderTip(currentPage, totalPages)}
                </Col>
                <Col xs={2} offset={{xs: 1}} style={{padding: 0, right: '1%'}}>
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
                <button className={'ingredient-container-navigation-button ingredient-container-navigation-button-first'}
                        onClick={this.handleFirstButtonClick}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-double-left']}/>
                </button>
            )
            : null;
    };

    renderTip = (currentPage, totalPages) => {
        return currentPage !== null ? (
                <span className={'ingredient-container-navigation-tip'}>
                    Page {currentPage + 1}/{totalPages}
                </span>
            )
            : null;
    };

    renderPreviousPageButton = (currentPage) => {
        return currentPage > 0 ? (
                <button
                    className={'ingredient-container-navigation-button ingredient-container-navigation-button-previous'}
                    onClick={this.handlePreviousButtonClick}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-left']}/>
                </button>
            )
            : null;
    };

    renderNextPageButton = (currentPage, totalPages) => {
        return currentPage + 1 < totalPages ? (
                <button
                    className={'ingredient-container-navigation-button ingredient-container-navigation-button-next'}
                    onClick={this.handleNextButtonClick}>
                    <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                     icon={['fas', 'angle-right']}/>
                </button>
            )
            : null;
    };

    handleFirstButtonClick = () => {
        this.props.setIngredientPage(0);
    };

    handlePreviousButtonClick = () => {
        const {currentPage} = this.props;
        this.props.setIngredientPage(currentPage - 1);
    };

    handleNextButtonClick = () => {
        const {name, ingredientPages, currentPage} = this.props;
        if (ingredientPages[currentPage + 1]) {
            this.props.setIngredientPage(currentPage + 1);
        } else {
            this.props.getIngredients(name, currentPage + 1);
        }
    };
}

const mapStateToProps = (state) => {
    return {
        name: state.ingredientReducer.name,
        ingredientPages: state.ingredientReducer.ingredientPages,
        currentPage: state.ingredientReducer.currentPage,
        totalPages: state.ingredientReducer.totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: (ingredients, page) => dispatch(getIngredients(ingredients, page)),
        setIngredientPage: (page) => dispatch(setIngredientPage(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientContainerNavigation);
