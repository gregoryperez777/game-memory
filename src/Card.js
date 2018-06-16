import React, { Component } from 'react';
import Flipcard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css';
import './Card.css';

export default class Card extends Component {
	render() {

		const { icon, selectedCard, isComparing, wasGuessed } = this.props; 

		return (
			<div className="card" onClick={selectedCard}>
				<Flipcard flipped={isComparing || wasGuessed }>
					<div className='front'>
					</div>
					<div className='back'>
						<i className={`fa ${icon} fa-5x`}></i>	
					</div>	
				</Flipcard>

			</div>	
		);
	}
}
