import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import './Card.css';

export default class Card extends Component {
	render() {

		const { icon } = this.props; 

		return (
			<div className="card">

				<FlexyFlipCard>
					<div className='portada'>
						<i ref='flipper' className={`fa ${icon} fa-5x`}></i>	
					</div>
					<div className='contenido' ref='flipper'>
						<p ref='flipper'>Card</p>
					</div>	
				</FlexyFlipCard>

			</div>	
		);
	}
}
