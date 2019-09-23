import React from 'react';

const Lists = () => {
	const numbers = [1, 2, 4, 4, 5];
	const listItems = numbers.map((number, inde) => (
		<li key={number + inde}>{number}</li>
	));
	return (
		<div>
			<h1>React is amazing!</h1>
			{listItems}
		</div>
	);
};

// key determines if the component is changed
// only use index if they don't repeat

export default Lists;
