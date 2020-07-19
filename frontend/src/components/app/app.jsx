import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import DishConstructor from '../dish-constructor';
import '../fa-library/fa-library';
import './app.scss';

export default class App extends React.Component {

    render = () => {
        return (
            <Switch>
                <Route path={'/constructor'} component={DishConstructor}/>
                <Redirect to={'/constructor'}/>
            </Switch>
        );
    };
}


