import PropTypes from 'prop-types';
import s from './styles.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className={s.info}>
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
