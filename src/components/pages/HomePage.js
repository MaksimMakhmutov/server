import { TodoProvider } from '../../context/AppContext';
import { TodoList, TodoInput, SearchAndSort } from '../index';
import s from './styles.module.css';

export const HomePage = () => {
	return (
		<TodoProvider>
			<div className={s.container}>
				<h1>Список дел</h1>
				<TodoInput />
				<SearchAndSort />
				<TodoList />
			</div>
		</TodoProvider>
	);
};
