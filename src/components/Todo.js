import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import { setProcessing } from '../actions';

const Todo = ({ todos, dispatch}) => (
  <div>
    {todos.map(todo => 
    	<div key={ todo.id } >
	    	<div> { todo.task } </div>
      	<div> { todo.time } </div>
      	<div> {getMark(todo.processing)} </div>
        {/* <button onClick={dispatch(setProcessing(config.MARK_AS_DOING, todo.id))}>MARK_AS_NEW</button> */}
      </div>
    )}
  </div>
)

const getMark = (processing) => {
  switch (processing) {
    case config.MARK_AS_DOING:
      return 'DOING';
    case config.MARK_AS_DONE:
      return 'DONE';
    default:
      return 'NEW';
  }
}

Todo.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    processing: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Todo