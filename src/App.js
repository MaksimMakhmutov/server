import { useEffect, useState } from 'react';
import s from './style.module.css';
export function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [todoLists, setTodoLists] = useState([]);
	useEffect(() => {
		document.body.classList.add('light');
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => {
				setTodoLists(data);
			})
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Список дел</h1>
			</div>
			{isLoading ? (
				<div className={s.loader}></div>
			) : (
				<div className={s.content}>
					{todoLists.map((todo, index) => (
						<div key={index} className={s.list}>
							{todo.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
