import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Router, Route } from 'react-router';

import InitialScreen from './screan/TodoApp'

const Root = ({ store }) => (
    <Provider store={ store }>
        <InitialScreen />
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
