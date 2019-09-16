import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<button type="submit">SUBMIT</button>
			</form>
		);
	}
}

// bad idea to get text from input - not React way - have to use getelementby...

export default App;
