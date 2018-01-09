import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TodoList from './TodoList';
import toggleTodo from '../action/toggleTodo';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state, { match: { params: { filter } } }) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            filter || 'all',
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => dispatch(toggleTodo(id)),
    }
};

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList));

export default VisibleTodoList;
