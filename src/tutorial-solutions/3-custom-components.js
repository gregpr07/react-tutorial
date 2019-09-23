import React from 'react';
import MakeHouse from './House';

class CustomComponent extends React.Component {
	MakeTitle = props => {
		const person = props.object;
		return (
			<div>
				<h4>
					{person.name} {person.surname}
				</h4>
				{props.children}
				<h4>Was signed</h4>
				<MakeHouse object={{ house: 'ljubljana' }}></MakeHouse>
			</div>
		);
	};

	object = { name: 'neki', surname: 'stefan' };

	render() {
		return (
			<div>
				<h1>React is amazing!</h1>
				<this.MakeTitle object={this.object}>
					<div>
						<ul>
							<li>bla bla</li>
						</ul>
					</div>
				</this.MakeTitle>
				{this.MakeTitle}
			</div>
		);
	}
}

// why use -- repetetivness

// name="Sara" name={Name:"Sara"} + surname

// this allows us -- BENEFIT OF USING COMPONENTS

// props.children

export default CustomComponent;
