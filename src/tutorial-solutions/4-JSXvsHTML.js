import React from 'react';

const JSXvHTML = () => {
	const PersonDetails = props => {
		const person = props.person;
		return (
			<div>
				<h3>
					{person.name} {person.surname}
				</h3>
			</div>
		);
	};

	// make list

	const list = [
		{ name: 'Paul', surname: 'Walker' },
		{ name: 'Neki', surname: 'Neki' }
	];

	const ListPersons = () => {
		return list.map(person => <PersonDetails person={person} />);
	};
	return (
		// STYLE WITH CSS
		<div>
			<h1 className="amazing">React is amazing!</h1>
			<ListPersons></ListPersons>
		</div>
	);
};

// make complex component - list .map through {name,surname,date}

// props.children

export default JSXvHTML;
