import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.todoFilter,
	link: ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)); }
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Link)