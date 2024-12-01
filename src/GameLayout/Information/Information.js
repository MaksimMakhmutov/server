import PropTypes from 'prop-types';
import {} from './styels.infomation.css'

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className = 'info'>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа ${currentPlayer}`
					: `Ход ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
