import * as React from 'react';

import './app.scss';
import SearchIngredientContainer from "../search-ingredient/search-ingredient-container";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class App extends React.Component {

    render = () => {
        return (
            <Container fluid>
                <Row>
                    <SearchIngredientContainer/>
                    <SearchIngredientContainer/>
                    <SearchIngredientContainer/>
                </Row>
            </Container>
        );
    };
}


