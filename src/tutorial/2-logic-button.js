import React from 'react';

const App = () => {
	// logic
	const sayHello = () => {
		console.log('Pressed the button');
	};

	// 2.1 Format User function (make object and function) - two ways -- here only function - component go next slide
	//just say hello

	return (
		<div>
			<h1>React is amazing!</h1>
			{/* DON'T NEED EVENT LISTENERS, for each event () => invoke function */}
			<button onClick={() => sayHello()}>Click me for surprise</button>
		</div>
	);
};

export default App;
