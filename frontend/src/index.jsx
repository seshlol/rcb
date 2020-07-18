import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/index';
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
