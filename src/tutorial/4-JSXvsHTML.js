import React from 'react';

const App = () => {
	const PersonDetails = person => {
		return (
			<div>
				<h3>{person.name}</h3>
				<h4>{person.surname}</h4>
			</div>
		);
	};
	const persons = [
		{
			name: 'John',
			surname: 'Doe'
		},
		{
			name: 'Erlich',
			surname: 'Bachman'
		}
	];
	return (
		<div>
			<h1 class="amazing">React is amazing!</h1>
			{persons.map(person => {
				return <div>{PersonDetails(person)}</div>;
			})}
		</div>
	);
};

// JSX closer to JS - uses camel case

// allows us to write JS inside "HTML" (JSX) { CODEBLOCKS }

// make complex component - list .map through {name,surname,date}

// even by this point HTML is really much faster to write

export default App;
