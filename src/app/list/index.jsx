import React from 'react';
import PropTypes from 'prop-types';

export default function List({ items, id, render }) {
	function filter(items) {
		return items.filter((item) => item.title);
	}

	return (
		<ul>
			{items.map((item) => (
				<li key={item[id]}>{render(item)}</li>
			))}
		</ul>
	);
}

List.propTypes = {
	render: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};
