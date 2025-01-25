import PropTypes from 'prop-types';
import s from './styels.module.css';

export const FieldLayout = ({ field, onCellClick }) => (
	<div className={s.field}>
		{field.map((cell, index) => (
			<button className={s.btn} key={index} onClick={() => onCellClick(index)}>
				{cell}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};
