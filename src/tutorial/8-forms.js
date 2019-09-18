import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		// spread operator
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
			<div style={{ padding: '5rem' }}>
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
				{/* loop through todo */}
			</div>
		);
	}
}

// bad idea to get text from input - not React way - have to use getelementby...

// try to make 9-todo

export default App;
