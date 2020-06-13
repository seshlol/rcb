import * as React from 'react';

import SearchIngredientContainer from '../search-ingredient/search-ingredient-container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './app.scss';

library.add(faSearch);

export default class App extends React.Component {

    render = () => {
        return (
            <Container fluid>
                <Row>
                    <Col xl="4">
                        <SearchIngredientContainer/>
                    </Col>
                    <Col xl="4">
                        <SearchIngredientContainer/>
                    </Col>
                    <Col xl="4">
                        <SearchIngredientContainer/>
                    </Col>
                </Row>
            </Container>
        );
    };
}


