import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import TabLink from '../containers/TabLink';

const App = () => (
  <div>
    <AddTodo />
    <TabLink />
    <TodoList />
  </div>
)

export default App;
