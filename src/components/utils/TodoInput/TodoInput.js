import { TodoInputField } from './TodoInputField';
import { SearchAndSort } from './SearchAndSort';

export const TodoInput = ({
	newTodo,
	setNewTodo,
	handleAddTodo,
	search,
	setSearch,
	isSort,
	setIsSort,
}) => (
	<div>
		<TodoInputField
			newTodo={newTodo}
			setNewTodo={setNewTodo}
			handleAddTodo={handleAddTodo}
		/>
		<SearchAndSort
			search={search}
			setSearch={setSearch}
			isSort={isSort}
			setIsSort={setIsSort}
		/>
	</div>
);
