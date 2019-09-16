import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', todos: [] };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log([this.state.value]);
		this.setState({
			todos: [...this.state.todos, this.state.value]
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<button type="submit">Add todo</button>
				</form>
				<ul>
					{this.state.todos.map((todo, index) => {
						return <li>{todo}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default App;
