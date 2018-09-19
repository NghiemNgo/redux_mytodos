import { connect } from 'react-redux';
import { TodoFilters } from '../actions';
import Todo from '../components/Todo';
import config from '../config';

const getTodoListHasFintered = (todos, filter) => {
	console.log(todos);
	console.log(filter);
	switch (filter) {
		case TodoFilters.SHOW_ALL:
			return todos;
		case TodoFilters.SHOW_NEW:
			return todos.filter(t => t.processing === config.MARK_AS_NEW);
		case TodoFilters.SHOW_DOING:
			return todos.filter(t => t.processing === config.MARK_AS_DOING);
		case TodoFilters.SHOW_DONE:
			return todos.filter(t => t.processing === config.MARK_AS_DONE);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
}

const mapStateToProps = state => ({
	todos: getTodoListHasFintered(state.todos, state.todoFilter)
})


export default connect(
	mapStateToProps
)(Todo)