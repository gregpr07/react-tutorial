import React from 'react';

const JSXvHTML = () => {
	const PersonDetails = props => {
		const person = props.person;
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

// make complex component - list .map through {name,surname,date}

// props.children

export default JSXvHTML;
