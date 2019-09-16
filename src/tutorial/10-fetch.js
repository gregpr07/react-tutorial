import React from 'react';

const App = () => {
	return (
		<div>
			<h1>React is amazing!</h1>
		</div>
	);
};

export default App;

fetch(
	this.state.site_api +
		'search?text=' +
		this.state.search_key +
		'&page=' +
		this.state.current_page
)
	.then(res => res.json())
	.then(json => {
		this.setState({
			isLoaded: true,
			api_search: {
				query: json.query,
				rec_materials: json.rec_materials,
				metadata: json.metadata
			},
			showRecommendations: false,
			IsSearching: true
		});
	});
