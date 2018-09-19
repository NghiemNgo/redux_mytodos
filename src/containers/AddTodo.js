import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
	let task;
  let time;
	return (
		<div>
      <form onSubmit={e => {
      	e.preventDefault();
      	if (!task.value.trim()) {
      		return;
      	}
        if (!time.value.trim()) {
          return;
        }
      	dispatch(addTodo(task.value, time.value));
      	task.value = '';
        time.value = '';
      }}>
        <input ref={node => task = node} placeholder="Task Name"/>
        <input ref={node => time = node} placeholder="30 minutes" />
        <button type="submit">
          Create
        </button>
      </form>
    </div>
	)
}

export default connect()(AddTodo);