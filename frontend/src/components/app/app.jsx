import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Constructor from '../constructor';
import '../fa-library/fa-library';
import './app.scss';

export default class App extends React.Component {

    render = () => {
        return (
            <Switch>
                <Route path={'/constructor'} component={Constructor}/>
                <Redirect to={'/constructor'}/>
            </Switch>
        );
    };
}


