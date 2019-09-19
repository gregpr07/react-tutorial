import React from 'react';

class StateLifecycles extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	// make increase count function

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increaseCount}>increase</button>
			</div>
		);
	}
}

//  Wrong
// this.state.comment = 'Hello'; -- will not re render the component
// Instead, use setState():
//  Correct
// this.setState({comment: 'Hello'});

// components update on change
// also access state from anywhere

export default StateLifecycles;
