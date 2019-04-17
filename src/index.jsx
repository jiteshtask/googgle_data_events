import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes/Routes';
import { date_store } from './Store';

const Main= ()=> (
    <Provider store= {date_store}>
        <Routes />
    </Provider>
);

render(<Main />, document.getElementById("app"));