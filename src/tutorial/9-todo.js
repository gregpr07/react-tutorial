import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', todos: [] };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	anything = event => {
		this.setState({
			todos: [...this.state.todos, this.state.value],
			value: ''
		});
		event.preventDefault();
	};

	removeItem = item => {
		const newList = this.state.todos.filter(li => li !== item);
		console.log('Removed: ' + item);
		this.setState({
			todos: newList
		});
	};

	render() {
		return (
			<div style={{ padding: '5rem' }}>
				<form onSubmit={this.anything}>
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
				<div>
					<h3>Todos:</h3>
					<ul>
						{this.state.todos.map((todo, index) => (
							<li key={index}>
								<h4 style={{ display: 'inline' }}>{todo}</h4>
								<button onClick={() => this.removeItem(todo)}>X</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
