import './app.scss';
import '../fa/fa';

import * as React from 'react';

import Container from 'react-grid-system/build/grid/Container'
import Row from 'react-grid-system/build/grid/Row'
import Col from 'react-grid-system/build/grid/Col'

import SearchIngredientContainer from '../search-ingredient/search-ingredient-container';

export default class App extends React.Component {

    render = () => {
        return (
            <Container style={{padding: '1rem'}} fluid>
                <Row>
                    <Col xl={4} style={{padding: 0}}>
                        <SearchIngredientContainer/>
                    </Col>
                    <Col xl={4} style={{padding: 0}}>
                        <SearchIngredientContainer/>
                    </Col>
                    <Col xl={4} style={{padding: 0}}>
                        <SearchIngredientContainer/>
                    </Col>
                </Row>
            </Container>
        );
    };
}


