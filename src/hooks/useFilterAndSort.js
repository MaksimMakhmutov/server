import { useState } from 'react';

export const useFilterAndSort = (todos) => {
	const [search, setSearch] = useState('');
	const [isSort, setIsSort] = useState(false);

	const filteredTodos = todos.filter((todo) => todo.title.includes(search));
	const sortedTodos = isSort
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: [...filteredTodos];

	return { search, setSearch, isSort, setIsSort, sortedTodos };
};
