import React from 'react';

import AddTodo from '../component/AddTodo';
import Footer from '../component/Footer';
import VisibleTodoList from '../component/VisibleTodoList';

const TodoApp = ({ params, match: { params: { filter } } }) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={ filter || 'all' } />
        <Footer />
    </div>
);

export default TodoApp;
