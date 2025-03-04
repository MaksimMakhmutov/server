import React from 'react';
import { connect } from 'react-redux';
import { ConnectedInformationLayout, ConnectedFieldLayout } from './GameLayout';

class Game extends React.Component {
	resetGame = () => {
		this.props.resetGame();
	};

	render() {
		const { isGameEnded, isDraw } = this.props;

		return (
			<div>
				<ConnectedInformationLayout />
				<ConnectedFieldLayout />
				{(isGameEnded || isDraw) && (
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

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

const mapDispatchToProps = (dispatch) => ({
	resetGame: () => dispatch({ type: 'RESET_GAME' }),
});

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);

const App = () => <ConnectedGame />;

export default App;
