import React from 'react';

export default function Screencast({ ext_id, title }) {
	return (
		<div className='__dml_list-item'>
			<a href={`https://youtube.com/watch?v=${ext_id}`}>
				<img
					src={`/thumbs/${ext_id}`.png}
					width='100%'
					alt={title}
				/>
				<div>{title}</div>
			</a>
		</div>
	);
}
