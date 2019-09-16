import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
			</div>
		);
	}
}

//  Wrong
// this.state.comment = 'Hello'; -- will not re render the component
// Instead, use setState():
//  Correct
// this.setState({comment: 'Hello'});

export default App;
