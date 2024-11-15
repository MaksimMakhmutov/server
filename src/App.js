import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const handeClickBack = () => {
		setActiveIndex((prevData) => prevData - 1);
	};

	const handleClickNext = () => {
		setActiveIndex((prevData) => prevData + 1);
	};

	const startOver = () => {
		setActiveIndex(0);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const stepsItems = steps.map((step, index) => (
		<li
			key={step.id}
			className={`${styles['steps-item']} ${index < activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
		>
			<button
				className={styles['steps-item-button']}
				onClick={() => setActiveIndex(index)}
			>
				{step.id.replace(/^0+/, '')}
			</button>
			{step.title}
		</li>
	));

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>{stepsItems}</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handeClickBack}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								activeIndex === steps.length - 1
									? startOver
									: handleClickNext
							}
						>
							{isLastStep ? 'Начать с начала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
