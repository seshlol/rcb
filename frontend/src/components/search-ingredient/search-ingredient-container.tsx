import * as React from 'react';

import './search-ingredient-container.scss';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <Jumbotron className="logic-block">
                <InputGroup size="sm">
                    <FormControl placeholder="Ingredient name"/>
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        );
    };
}


