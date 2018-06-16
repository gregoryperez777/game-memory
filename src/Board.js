import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
	render () {
		
		const { cards, selectedCouple, selectCard } = this.props;


		console.log(this.props);

		return (
			<div className='board'>
				{
					cards.map((card, index) => {
						const isComparing = selectedCouple.indexOf(card) > -1;

						return(
							<Card 
								key={index} 
								icon={card.icon}
								isComparing={isComparing}
								selectedCard={() => selectCard(card)}
								wasGuessed={card.wasGuessed}
							/>
						)
					}) 
				}
			</div>	
		);
	}
}