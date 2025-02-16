import React from 'react';
import { FieldLayout, InformationLayout } from './GameLayout/index';
import { connect } from 'react-redux';

class App extends React.Component {
	render() {
		return <Game {...this.props} />;
	}
}

class Game extends React.Component {
	handleCellClick = (index) => {
		if (this.props.field[index] || this.props.isGameEnded) return;
		this.props.makeMove(index);
	};
	resetGame = () => {
		this.props.resetGame();
	};
	render() {
		const { currentPlayer, isGameEnded, isDraw, field } = this.props;
		return (
			<div>
				<InformationLayout
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<FieldLayout field={field} onCellClick={this.handleCellClick} />
				{(isDraw || isGameEnded) && (
					<button
						className="px-5 py-2 mt-4 text-white bg-gray-800 border-none rounded-md cursor-pointer transition-colors hover:bg-gray-600"
						onClick={this.resetGame}
					>
						Начать заново
					</button>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		field: state.field,
		currentPlayer: state.currentPlayer,
		isGameEnded: state.isGameEnded,
		isDraw: state.isDraw,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		makeMove: (index) => dispatch({ type: 'MAKE_MOVE', index }),
		resetGame: () => dispatch({ type: 'RESET_GAME' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//123
