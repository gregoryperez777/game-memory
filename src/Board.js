import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
	render() {
		const cards = [1,2,3,4,5,6,7,8,9,10];

		return (
			<div className="board">
				{
					cards.map((card) => <Card></Card>) 
				}
			</div>	
		);
	}
}