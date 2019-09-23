import React from 'react';

const MakeHouse = props => {
	props = props.object;
	return <p>i live here: {props.house}</p>;
};

export default MakeHouse;
