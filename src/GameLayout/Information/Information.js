import React from 'react';
import PropTypes from 'prop-types';

class InformationLayout extends React.Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;
		let message = isDraw
			? 'Ничья'
			: isGameEnded
				? `Победа ${currentPlayer}`
				: `Ход ${currentPlayer}`;
		return <div className="text-xl mb-4">{message}</div>;
	}
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export { InformationLayout };
