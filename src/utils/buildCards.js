import FontAwesomeClasses from './fontAwesomeClasses';
import shuffle from 'lodash.shuffle';

const NUMBER_OF_CARDS = 20;

export default () => {
	const fontAwesomeClasses = FontAwesomeClasses();
	let cards = [];

	while (cards.length < NUMBER_OF_CARDS) {
		let index = Math.floor(Math.random() * fontAwesomeClasses.length);

		const card = {
			icon: fontAwesomeClasses.splice(index, 1)[0],
			wasGuessed: false,
		}

		cards.push(card);
		cards.push({...card});
	}

	return shuffle(cards);
}