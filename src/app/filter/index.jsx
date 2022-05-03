import React, { useState } from 'react';

export default function Filter({ render, placeholder }) {
	const [query, setQuery] = useState('');
	return (
		<div>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	);
}
