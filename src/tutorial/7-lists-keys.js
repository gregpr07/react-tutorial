import React from 'react';
import './App.css';

const App = () => {
	const numbers = [1, 2, 3, 4, 5];
	const listItems = numbers.map(number => <li>{number}</li>);
	return (
		<div>
			<h1>React is amazing!</h1>
			{listItems}
		</div>
	);
};

// key determines if the component is changed
// only use index if they don't repeat

export default App;
