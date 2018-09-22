import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link as LinkTo } from "react-router-dom";

const Link = ({children, active, onClick, link, count}) => (
	<Router>
		<LinkTo to={'/' + link}>
			<button
				disabled = {active}
				onClick = {onClick}
			>
				{children} {'(' + count + ')'}
			</button>
		</LinkTo>
	</Router>
)

Link.PropTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	link: PropTypes.string.isRequired
}

export default Link;