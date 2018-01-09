import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getVisibleTodos } from '../reducer/todoApp';
import TodoList from './TodoList';
import toggleTodo from '../action/toggleTodo';


const mapStateToProps = (state, { match: { params: { filter } } }) => {
    return {
        todos: getVisibleTodos(
            state,
            filter || 'all',
        ),
    };
};

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo },
)(TodoList));

export default VisibleTodoList;
