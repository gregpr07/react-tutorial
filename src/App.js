import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Basic from './tutorial/0-basic';
import FuncClass from './tutorial/1-func-class';
import Logic from './tutorial/2-logic-button';
import CustomComponent from './tutorial/3-custom-components';
import JSXvHTML from './tutorial/4-JSXvsHTML';
import StateLifecycles from './tutorial/5-state-lifecycles';
import If from './tutorial/6-inline-if';
import Lists from './tutorial/7-lists-keys';
import Forms from './tutorial/8-forms';
import Todo from './tutorial/9-todo';
import FetchSTH from './tutorial/10-fetch';
import Final from './tutorial/11-final-app';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Basic} />
			<Route path="/1" exact component={FuncClass} />
			<Route path="/2" exact component={Logic} />
			<Route path="/3" exact component={CustomComponent} />
			<Route path="/4" exact component={JSXvHTML} />
			<Route path="/5" exact component={StateLifecycles} />
			<Route path="/6" exact component={If} />
			<Route path="/7" exact component={Lists} />
			<Route path="/8" exact component={Forms} />
			<Route path="/9" exact component={Todo} />
			<Route path="/10" exact component={FetchSTH} />
			<Route path="/11" exact component={Final} />
			{/* <VisitNext /> */}
		</Router>
	);
};

/* 
const VisitNext = () => {
	const page = () => {
		const string = window.location.href;
		if (isNaN(parseInt(string[string.length - 1]))) {
			return -1;
		} else {
			return parseInt(string[string.length - 1]);
		}
	};
	const [currentPage, setCurrentPage] = useState(page());
	const updateCurrentPage = () => {
		setCurrentPage(page());
	};
	useEffect(() => updateCurrentPage());
	return (
		<button onClick={updateCurrentPage}>
			<Link to={'/' + (currentPage + 1)}>Visit part {currentPage + 1}</Link>
		</button>
	);
};
 */

export default App;
