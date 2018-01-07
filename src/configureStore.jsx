import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './repository/LocalStorage'
import rootReducer from './reducer/todoApp'

const configureStore = () => {
    const persistedStore = loadState();

    const store = createStore(rootReducer, loadState());

    store.subscribe(throttle(
        () => {
            saveState({
                todos: store.getState().todos,
            });
        },
        1000,
    ));
};

export default configureStore;
