import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Provider} from "react-redux";

import App from './components/app/index';

import store from "./store/stores";

ReactDOM.render(
        <App/>,
    document.getElementById('root')
);
