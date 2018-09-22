import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';
import { TodoFilters } from '../actions';
import config from '../config';

const visibleTask = (state, processing) => {
	console.log(processing);
	switch (processing) {
		case TodoFilters.SHOW_ALL:
			return state.todos.filter(t => t.processing !== config.MARK_AS_DELETE);
		case TodoFilters.SHOW_NEW:
			return state.todos.filter(t => t.processing === config.MARK_AS_NEW);
		case TodoFilters.SHOW_DOING:
			return state.todos.filter(t => t.processing === config.MARK_AS_DOING);
		case TodoFilters.SHOW_DONE:
			return state.todos.filter(t => t.processing === config.MARK_AS_DONE);
		default:
			throw new Error('Unknown filter: ' + processing);
	}
}

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.todoFilter,
	link: ownProps.filter,
	count: visibleTask(state, ownProps.filter).length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)); }
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Link)