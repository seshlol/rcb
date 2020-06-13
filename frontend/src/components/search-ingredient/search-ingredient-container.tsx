import './search-ingredient-container.scss';

import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

export default class SearchIngredientContainer extends React.Component {

    render = () => {
        return (
            <Jumbotron className="logic-block">
                <InputGroup size="sm">
                    <FormControl placeholder="ingredient name"/>
                    <InputGroup.Append>
                        <Button>
                            <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        );
    };
}


