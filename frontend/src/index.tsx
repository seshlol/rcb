import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/app';

import 'bootstrap/dist/css/bootstrap.min.css';

(() => {
    ReactDOM.render(<App/>, document.getElementById('root'));
})();