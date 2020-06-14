import './search-ingredient-container.scss';

import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <Jumbotron className="logic-block">
                <InputGroup>
                    <FormControl placeholder="ingredient name"/>
                    <InputGroup.Append>
                        <Button>
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>

                <div style={{marginTop: '0.8rem', height: '16rem', overflowY: 'scroll'}}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

            </Jumbotron>
        );
    };
}


