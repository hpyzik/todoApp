import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './repository/LocalStorage'
import rootReducer from './reducer/todoApp'

const configureStore = () => {
    const store = createStore(rootReducer, loadState());

    store.subscribe(throttle(
        () => {
            saveState({
                todos: store.getState().todos,
            });
        },
        1000,
    ));

    return store;
};

export default configureStore;
