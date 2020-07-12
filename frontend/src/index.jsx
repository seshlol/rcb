import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/index';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
);
