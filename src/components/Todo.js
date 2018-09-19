import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todos }) => (
  <div>
    {todos.map(todo => 
    	<div key={ todo.id }>
	    	<div> { todo.task } </div>
	      	<div> { todo.time } </div>
	      	<div> { todo.processing } </div>
      	</div>
      	
    )}
  </div>
)

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    processing: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

export default Todo