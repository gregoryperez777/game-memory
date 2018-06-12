import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import buildCards from './utils/buildCards';

const getInitialState = () => {
	const cards = buildCards();
	return {
		cards,
	}
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = getInitialState();
	}

	render() {
		const { cards } = this.state;

		return (
			<div className='App'>
				<Header />
				<Board 
					cards={cards}
				/>
			</div> 
		);
	}
}

export default App;
