import './app.scss';
import '../fa/fa';

import * as React from 'react';

import Container from 'react-grid-system/build/grid/Container'
import Row from 'react-grid-system/build/grid/Row'
import Col from 'react-grid-system/build/grid/Col'

import SearchIngredientContainer from '../search-ingredient-container/search-ingredient-container';

export default class App extends React.Component {

    render = () => {
        return (
            <Container style={{paddingLeft: '0', paddingRight: '0.5rem'}} fluid>
                <Row nogutter>
                    <Col xl={4} lg={6}>
                        <div className={'search-ingredient-container'}>
                            <SearchIngredientContainer/>
                        </div>
                    </Col>
                    <Col xl={4} lg={6}>
                        <div className={'search-ingredient-container'}>
                            <SearchIngredientContainer/>
                        </div>
                    </Col>
                    <Col xl={4} lg={6}>
                        <div className={'search-ingredient-container'}>
                            <SearchIngredientContainer/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
}


