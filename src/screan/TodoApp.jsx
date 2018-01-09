import React from 'react';

import AddTodo from '../component/AddTodo';
import Footer from '../component/Footer';
import VisibleTodoList from '../component/VisibleTodoList';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;
