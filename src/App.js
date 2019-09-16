import React from 'react';

const text = 'machine learning';
fetch(`https://platform.x5gon.org/api/v1/search?text=${text}`)
	.then(res => res.json())
	.then(json => {
		/* this.setState({
			isLoaded: true
        }); */
		console.log(json);
	});

const App = () => {
	return (
		<div>
			<h1>React is amazing!</h1>
		</div>
	);
};

export default App;
