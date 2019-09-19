import React from 'react';

class If extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// Try to get rid of this?
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>

			// make div
		);
	}
}

// ARROW functions - is this this or that?
// inline if

// condition ? true : false
// && and ||

// cant use if

export default If;
