import { useState } from 'react';
import { InformationLayout } from './GameLayout/Information/Information';
import { FieldLayout } from './GameLayout/Field/Field';
import {} from './styels.game.css';
export const App = () => {
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	// Логика клика на клетку
	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		// Проверка на победу
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (const pattern of WIN_PATTERNS) {
			if (
				newField[pattern[0]] &&
				newField[pattern[0]] === newField[pattern[1]] &&
				newField[pattern[0]] === newField[pattern[2]]
			) {
				setIsGameEnded(true);
				return;
			}
		}

		// Проверка на ничью
		if (!newField.includes('')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			console.log(currentPlayer);
		}
	};

	// Сброс игры
	const resetGame = () => {
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<div className="game">
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldLayout field={field} onCellClick={handleCellClick} />
			{isDraw || isGameEnded ? (
				<button className='resetButton' onClick={resetGame}>Начать заново</button>
			) : null}
		</div>
	);
};
