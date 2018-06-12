import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
	render () {
		
		const { cards } = this.props;

		return (
			<div className="board">
				{
					cards.map((card) => <Card icon={card.icon}/>) 
				}
			</div>	
		);
	}
}