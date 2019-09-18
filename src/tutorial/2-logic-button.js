import React from 'react';

const App = () => {
	// logic

	//just say hello

	function sayHello() {
		console.log('pressed the button');
	}

	//convert to arrow

	// make name, surname function
	// 2.1 Format User function (make object and function) - two ways -- only function

	return (
		<div>
			<h1>React is amazing!</h1>
			{/* DON'T NEED EVENT LISTENERS, for each event () => invoke function */}

			<button>Click me for surprise</button>
		</div>
	);
};

export default App;
