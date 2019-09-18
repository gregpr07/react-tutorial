import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', searchResults: [] };
	}
	fetchData = event => {
		event.preventDefault();
		const text = this.state.value;
		fetch(`https://platform.x5gon.org/api/v1/search?text=${text}`)
			.then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({
					searchResults: json.rec_materials
				});
			});
	};
	handleChange = event => {
		this.setState({ value: event.target.value });
	};
	makeForm = () => (
		<form onSubmit={this.fetchData}>
			<label>
				<input
					style={styles.input}
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</label>
			<button type="submit" style={styles.searchButton}>
				Search
			</button>
		</form>
	);
	makeUL = () => (
		<ul style={styles.ul}>
			{this.state.searchResults.map((item, index) => (
				<li style={styles.li} key={index}>
					<h3 style={{ color: 'white' }}>{item.title}</h3>
					<p>{item.description ? item.description.slice(0, 200) : null}</p>
				</li>
			))}
		</ul>
	);

	render() {
		return (
			<div style={styles.div}>
				<h1>Search X5GON repo</h1>
				<this.makeForm />
				<this.makeUL />
			</div>
		);
	}
}

const styles = {
	div: {
		padding: '5rem',
		backgroundColor: '#212121',
		fontFamily: 'Arial',
		minHeight: '100vh',
		color: 'white'
	},
	ul: {
		listStyle: 'none',
		marginLeft: 0,
		paddingLeft: 0
	},
	li: {
		/* backgroundColor: '#616161', */
		border: '1px solid #D84315',
		color: '#9E9E9E',
		padding: '0 10px 0 10px',
		margin: '1rem 0 1rem 0',
		borderRadius: '5px'
	},
	input: {
		border: '3px solid #303F9F',
		borderRadius: '10px',
		background: 'none',
		padding: '2px 5px 2px 5px',
		color: 'white'
	},
	searchButton: {
		backgroundColor: '#D84315',
		border: 'none',
		borderRadius: '10px',
		padding: '5px 20px 5px 20px',
		marginLeft: '20px',
		color: 'black',
		cursor: 'pointer'
	}
};

export default App;
