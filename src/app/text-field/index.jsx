import React from 'react';
import PropTypes from 'prop-types';

export default function TextField({
	render,
	placeholder,
	type = 'text',
	value,
	onChange,
}) {
	return (
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className='__dml_text-field'
		/>
	);
}

TextField.propTypes = {
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.oneOf('text', 'password', 'email', 'number'),
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
