import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Router, Route } from 'react-router';

import InitialScreen from './screan/TodoApp'

const history = createBrowserHistory();

const Root = ({ store }) => (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path='/:filter?' component={ InitialScreen } />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
