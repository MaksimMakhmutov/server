import React from 'react';
import PropTypes from 'prop-types';

class FieldLayout extends React.Component {
	render() {
		const { field, onCellClick } = this.props;
		return (
			<div class="grid grid-cols-3 grid-rows-3 gap-0">
				{field.map((cell, index) => (
					<button
						key={index}
						class="w-[75px] h-[75px] bg-white border-2 border-black flex justify-center items-center text-4xl cursor-pointer transition-colors duration-300 ease-in-out"
						onClick={() => onCellClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export { FieldLayout };
