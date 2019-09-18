import React from 'react';

const App = () => {
	const PersonDetails = person => {
		person = person.person;
		return (
			<div>
				<h3>{person.name}</h3>
				<h4>{person.surname}</h4>
			</div>
		);
	};

	// make list

	return (
		// STYLE WITH CSS
		<div>
			<h1 class="amazing">React is amazing!</h1>
			<PersonDetails person={{ name: 'Paul', surname: 'Walker' }} />
		</div>
	);
};

const custom = {
	padding: '5rem',
	backgroundColor: '#17223b',
	color: '#6b778d'
};

// JSX closer to JS - uses camel case

// allows us to write JS inside "HTML" (JSX) { CODEBLOCKS }

// make complex component - list .map through {name,surname,date}

export default App;
