import React from 'react';
import { connect } from 'react-redux';

class InformationLayout extends React.Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;
		let message = isDraw
			? 'Ничья'
			: isGameEnded
				? `Победа ${currentPlayer}`
				: `Ход ${currentPlayer}`;

		return <div class="text-xl mb-4">{message}</div>;
	}
}

const mapStateToPropsInformation = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const ConnectedInformationLayout = connect(mapStateToPropsInformation)(
	InformationLayout,
);
