import * as React from 'react';

import './search-ingredient-container.scss';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <Jumbotron className="logic-block">
                <InputGroup size="sm">
                    <FormControl placeholder="ingredient name"/>
                    <InputGroup.Append>
                        <Button>
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        );
    };
}


