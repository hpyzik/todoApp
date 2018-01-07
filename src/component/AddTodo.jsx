import { connect } from 'react-redux';
import React from 'react';

import addTodo from '../action/addTodo';

const AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={ node => {
                input = node;
            } } />
            <button onClick={ () => {
                dispatch(addTodo(input.value));
                input.value = '';
            } }>Add Todo
            </button>
        </div>
    )
};

export default connect()(AddTodo);
