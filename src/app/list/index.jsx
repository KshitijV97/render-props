import React from 'react';

export default function List({ items }) {
	return (
		<ul>
			{items.map((item) => (
				<li>
					<div className='__dml_list-item'>
						<a href={`https://youtube.com/watch?v=${item.ext_id}`}>
							<img
								src={`/thumbs/${item.ext_id}`.png}
								width='100%'
								alt={item.title}
							/>
							<div>{item.title}</div>
						</a>
					</div>
				</li>
			))}
		</ul>
	);
}
