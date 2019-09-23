import React from 'react';

class Forms extends React.Component {
	constructor(props) {
		super(props);
		// spread operator
		this.state = { value: '', element: [] };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ element: [...this.state.element, this.state.value] });
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
				{this.state.element.map(value => (
					<li key={value.slice(0, 10)}>{value}</li>
				))}
			</div>
		);
	}
}

// bad idea to get text from input - not React way - have to use getelementby...

// try to make 9-todo

export default Forms;
