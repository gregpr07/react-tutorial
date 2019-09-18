import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', searchResults: [] };
	}
	fetchData = () => {
		const text = 'machine learning';
		fetch(`https://platform.x5gon.org/api/v1/search?text=${text}`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					searchResults: true
				});
				console.log(json);
			});
	};

	render() {
		return (
			<div>
				<h1>React is amazing!</h1>
				<button onClick={() => this.fetchData()}>Fetch</button>

				{/* DISPLAY FETCHED ELEMENTS with UL */}
			</div>
		);
	}
}

// add form, handle change

export default App;
