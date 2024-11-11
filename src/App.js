import React, { useState } from 'react';
import styles from './app.module.css';

export function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	// Функция для запроса значения через prompt
	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		console.log(promptValue);

		// Валидация и установка состояния
		if (promptValue) {
			if (promptValue.length >= 3) {
				setValue(promptValue);
				setError('');
			} else {
				setError('Значение должно содержать минимум 3 символа.');
			}
		}
	};

	// Проверка на валидность значения
	const isValueValid = value.length >= 3;

	// Добавление значения в список
	const onAddButtonClick = () => {
		if (isValueValid) {
			const newItem = { id: Date.now(), value };
			setList((list) => [...list, newItem]);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>

			{/* Вывод текущего значения */}
			<p className={styles.noMarginText}>{`Текущее значение value: "${value}"`}</p>
			<div className={styles.buttonsContainer}>
				{/* Кнопка для ввода нового значения */}
				<button onClick={onInputButtonClick} className={styles.button}>
					Ввести новое
				</button>

				{/* Кнопка для добавления в список */}
				<button
					onClick={onAddButtonClick}
					disabled={!isValueValid}
					className={styles.button}
				>
					Добавить в список
				</button>
			</div>

			{/* Условный рендеринг ошибки */}
			{error && <div className={styles.error}>{error}</div>}

			{/* Список значений */}
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				<ul>
					{list.length > 0 ? (
						list.map((item) => <li key={item.id}>{item.value}</li>)
					) : (
						<p>Нет добавленных элементов.</p>
					)}
				</ul>
			</div>
		</div>
	);
}
