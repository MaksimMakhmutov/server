import PropTypes from 'prop-types';
import {} from './styels.board.css';

export const FieldLayout = ({ field, onCellClick }) => (
	<div className="field">
		{field.map((cell, index) => (
			<button className="button" key={index} onClick={() => onCellClick(index)}>
				{cell}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};
