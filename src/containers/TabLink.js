import React from 'react';
import FillterLink from '../containers/FillterLink';
import { TodoFilters } from '../actions';

const TabLink = () => (
	<div>
		<FillterLink filter={TodoFilters.SHOW_ALL} > ALL </FillterLink>
		<FillterLink filter={TodoFilters.SHOW_NEW} > NEW </FillterLink>
		<FillterLink filter={TodoFilters.SHOW_DOING} > DOING </FillterLink>
		<FillterLink filter={TodoFilters.SHOW_DONE} > COMPLATE </FillterLink>
	</div>
);

export default TabLink;