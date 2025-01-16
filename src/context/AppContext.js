import React, { createContext, useContext, useState } from 'react';
import { useFilterAndSort, useJsonServer, requestAddTodo } from '../hooks';

const TodoContext = createContext();

export const useTodo = () => {
	return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const { search, setSearch, isSort, setIsSort, sortedTodos } = useFilterAndSort(todos);
	const { isLoading } = useJsonServer(setTodos);

	const handleAddTodo = async () => {
		if (!newTodo.trim()) {
			alert('Поле не может быть пустым');
			return;
		}
		const todo = await requestAddTodo(newTodo);
		setTodos((prev) => [...prev, todo]);
		setNewTodo('');
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				newTodo,
				setNewTodo,
				handleAddTodo,
				search,
				setSearch,
				isSort,
				setIsSort,
				sortedTodos,
				isLoading,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
