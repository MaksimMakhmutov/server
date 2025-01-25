export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // строки
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // столбцы
	[0, 4, 8],
	[2, 4, 6], // диагонали
];

export const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};
