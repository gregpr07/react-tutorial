import React from 'react';

// You can have React.Component or Component --> import {Component}
class App extends React.Component {
	render() {
		return (
			// this is JSX, resemble HTML -> kinda is, but gets compiled to native HTML
			<div>
				<h1>React is amazing!</h1>
			</div>
		);
	}
}

// eslint-disable-next-line
const App1 = () => {
	return (
		<div>
			<h1>React is amazing!</h1>
		</div>
	);
};

// eslint-disable-next-line
const App2 = () => (
	<div>
		<h1>React is amazing!</h1>
	</div>
);

export default App;
