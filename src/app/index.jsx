import React from 'react';
import './styles.css';

import screencasts from '../data/screencasts.json';

export default function App() {
	return (
		<div>
			<ul>
				{screencasts.map((screencast) => (
					<li>
						<div className='__dml_list-item'>
							<a
								href={`https://youtube.com/watch?v=${screencast.ext_id}`}
							>
								<img
									src={`/thumbs/${screencast.ext_id}`.png}
									width='100%'
									alt={screencast.title}
								/>
								<div>{screencast.title}</div>
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
