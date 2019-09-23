import React from 'react';

// styling
// imports

const Basic = () => {
	return (
		<div style={custom}>
			<h1>React is amazing!</h1>
		</div>
	);
};

const custom = {
	padding: '5rem',
	backgroundColor: '#17223b',
	color: '#6b778d'
};

// JSX closer to JS - uses camel case

export default Basic;
