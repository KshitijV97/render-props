import React from 'react';

export default function List({ items, id, render }) {

    function filter(items){
        return items.filter(item => item.title)
    }

	return (
		<ul>
			{items.map((item) => (
				<li key={item[id]}>{render(item)}</li>
			))}
		</ul>
	);
}
