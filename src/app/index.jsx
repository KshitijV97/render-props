import React from 'react';
import './styles.css';
import List from './list';
import screencasts from '../data/screencasts.json';

export default function App() {
	return (
		<div>
			<List items={screencasts} />
		</div>
	);
}
