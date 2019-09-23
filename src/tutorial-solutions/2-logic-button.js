import React from 'react';

const Logic = () => {
	// logic

	const sayHello = woerd => {
		console.log(woerd);
	};

	// convert to arrow

	const formatName = (name, surname) => {
		return (
			<div>
				<h4>
					{name} {surname}
				</h4>
			</div>
		);
	};

	// make name, surname function

	// 2.1 Format User function (make object and function) - two ways -- only function

	// allows us to write JS inside "HTML" (JSX) { CODEBLOCKS }

	return (
		<div>
			<h1>React is amazing!</h1>

			{/* DON'T NEED EVENT LISTENERS, for each event () => invoke function */}
			<button onClick={() => sayHello('hello')}>Click me for surprise</button>
			{formatName('bilie', 'alish')}
		</div>
	);
};

export default Logic;
