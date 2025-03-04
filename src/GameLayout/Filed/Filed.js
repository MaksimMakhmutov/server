import React from 'react';
import { connect } from 'react-redux';

class FieldLayout extends React.Component {
	handleClick = (index) => {
		const { field, makeMove, isGameEnded } = this.props;
		if (isGameEnded || field[index]) return;

		makeMove(index);
	};

	render() {
		const { field } = this.props;

		return (
			<div class="grid grid-cols-3 gap-4">
				{field.map((cell, index) => (
					<div
						key={index}
						onClick={() => this.handleClick(index)}
						class="w-[75px] h-[75px] bg-white border-2 border-black flex justify-center items-center text-4xl cursor-pointer transition-colors duration-300 ease-in-out"
					>
						{cell}
					</div>
				))}
			</div>
		);
	}
}

const mapStateToPropsField = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
});

const mapDispatchToPropsField = (dispatch) => ({
	makeMove: (index) => dispatch({ type: 'MAKE_MOVE', index }),
});

export const ConnectedFieldLayout = connect(
	mapStateToPropsField,
	mapDispatchToPropsField,
)(FieldLayout);
