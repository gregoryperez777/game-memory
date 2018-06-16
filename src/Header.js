import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {

		const { reset } = this.props;

		return (
			<header>
				<div className='title'>Memory Game</div>
				<div>
					<button className='button-reset' onClick={reset}>
						Reset
					</button>	
				</div>
				<div className='title'>
					Intentos	
				</div>		
			</header>
		);
	}
} 