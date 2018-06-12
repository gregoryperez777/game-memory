import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
	render() {

		const { icon } = this.props; 

		return (
			<div className="card">
				<i className={`fa ${icon} fa-5x`}></i>
			</div>	
		);
	}
}
