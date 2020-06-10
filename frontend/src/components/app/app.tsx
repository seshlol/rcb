import * as React from 'react';

import './app.scss';
import SearchIngredientContainer from "../search-ingredient/search-ingredient-container";

export default class App extends React.Component {

    render = () => {
        return (
            <div className="app-container">
                <SearchIngredientContainer/>
            </div>
        );
    };
}


