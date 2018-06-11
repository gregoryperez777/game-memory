import React, { Component } from 'react';
import './Board.css';

export default class Board extends Component {
	render() {
		const cards = [1,2,3,4,5,6];

		return (
			<div clasName="board">
				{
					cards.map((card) => <span>{ card }</span>) 
				}
			</div>	
		);
	}
} 