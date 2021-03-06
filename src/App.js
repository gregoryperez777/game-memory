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
		selectedCouple: [],
		isComparingCouple: false,
		numberOfAttemps: 0
	}
}


class App extends Component {
	constructor (props) {
		super(props);
		this.state = getInitialState();
	};

	selectCard (card) {
		if (
			this.state.isComparingCouple ||
			this.state.selectedCouple.indexOf(card) > -1 ||
			card.wasGuessed
		) {
			return;
		}

		const selectedCouple = [...this.state.selectedCouple, card];

		this.setState({
			selectedCouple,
		});


		console.log(this.state.selectedCouple);

		if (this.state.selectedCouple.length === 1) {
			this.compareCouple(selectedCouple);
		}
	};

	win (cards) {
		if (cards.filter((card) => !card.wasGuessed).length === 0) {
			alert(`Ganaste en ${this.state.numberOfAttempss} intentos!`);
		}
	}

	compareCouple (selectedCouple) {
		this.setState({
			isComparingCouple: true,
		});
		
		setTimeout(() => {
			const [firtCard, secondCard] = selectedCouple;
			let cards = this.state.cards;

			if (firtCard.icon === secondCard.icon) {
				cards = cards.map((card) => {
					if (card.icon !== firtCard.icon) {
						return card;
					}

					return { ...card, wasGuessed: true };
				});
			}

			this.win(cards);

			this.setState({
				cards,
				selectedCouple: [],
				isComparingCouple: false,
				numberOfAttemps: this.state.numberOfAttemps + 1,
			});	
		}, 1000);
	};

	restartGame () {
		this.setState(getInitialState());
	};

	

	render() {
		const { cards } = this.state;

		return (
			<div className='App'>
				<Header 
					reset={() => this.restartGame()}
					Attemps={this.state.numberOfAttemps}
				/>
				<Board 
					cards={cards}
					selectedCouple={this.state.selectedCouple}
					selectCard={(card) => this.selectCard(card)} 
				/>
			</div> 
		);
	}
}

export default App;
