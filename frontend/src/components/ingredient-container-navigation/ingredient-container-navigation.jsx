import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import Col from 'react-grid-system/build/grid/Col';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient-container-navigation.scss';

class IngredientContainerNavigation extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <Col xs={3} style={{padding: 0}}>
                    <button className={'ingredient-container-navigation-button ingredient-container-navigation-button-first'}>
                        <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </Col>
                <Col xs={3} offset={{xs: 3}} style={{padding: 0, right: '1%'}}>
                    <button className={'ingredient-container-navigation-button ingredient-container-navigation-button-previous'}>
                        <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </Col>
                <Col xs={3} style={{padding: 0}}>
                    <button className={'ingredient-container-navigation-button ingredient-container-navigation-button-next'}>
                        <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </Col>
            </Row>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(null, mapDispatchToProps())(IngredientContainerNavigation);
