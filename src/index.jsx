import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Root from './Root';

const store = configureStore();

ReactDom.render(
    <Root store={ store } />,
    document.getElementById('appRoot'),
);
