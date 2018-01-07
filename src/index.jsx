import React from 'react';
import ReactDom from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import InitialScreen from './screan/TodoApp'
import { loadState, saveState } from './repository/LocalStorage'
import rootReducer from './reducer/todoApp'

const store = createStore(rootReducer, loadState());

store.subscribe(throttle(
    () => {
        saveState({
            todos: store.getState().todos,
        });
    },
    1000,
));

ReactDom.render(
    <Provider store={ store }>
        <InitialScreen />
    </Provider>,
    document.getElementById('appRoot'),
);
