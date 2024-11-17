import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const NUMS = ['7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', 'C', '0', '='];

	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [summ, setSumm] = useState(null);
	function onNumberButtonClick(button) {
		if (summ !== null) {
			setOperand1(button);
			setOperand2('');
			setOperator('');
			setSumm(null);
		} else if (operator === '' || operand1 === '') {
			if (operand1 === '0') {
				setOperand1(button);
			} else {
				setOperand1(operand1 + '' + button);
			}
		} else {
			setOperand2(operand2 + '' + button);
		}
	}

	function onButtonOperatorClick(button) {
		if (operand1 !== '') {
			if (summ !== null) {
				setOperand1(summ);
				setOperand2('');
			}
			setOperator(button);
		}
	}

	function onButtonClearClick() {
		setOperand1('0');
		setOperand2('');
		setOperator('');
	}
	// func calc
	function onButtonEqualClick() {
		if (operator !== '') {
			let result;
			if (operator === '+') {
				result = Number(operand1) + Number(operand2);
			} else if (operator === '-') {
				result = Number(operand1) - Number(operand2);
			}

			setOperand1(result.toString());
			setOperand2('');
			setOperator('');
		}
	}

	return (
		<div className="App">
			<div
				className={
					styles.display + (summ !== null ? ' ' + styles['display-equal'] : '')
				}
				id="display"
			>
				{summ !== null ? summ : `${operand1} ${operator} ${operand2}`}
			</div>
			<div className={styles.buttons}>
				{NUMS.map((button) => (
					<button
						key={button}
						className={
							styles.btn +
							(button === '-' ? ' ' + styles['btn-operator'] : '') +
							(button === '+' ? ' ' + styles['btn-operator'] : '') +
							(button === 'C' ? ' ' + styles['btn-clear'] : '') +
							(button === '=' ? ' ' + styles['btn-equal'] : '')
						}
						onClick={
							button === '='
								? onButtonEqualClick
								: button === 'C'
									? onButtonClearClick
									: ['+', '-'].includes(button)
										? () => onButtonOperatorClick(button)
										: () => onNumberButtonClick(button)
						}
					>
						{button}
					</button>
				))}
			</div>
		</div>
	);
};
