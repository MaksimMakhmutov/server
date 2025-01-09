import { useState, useEffect } from 'react';

export const useJsonServer = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3001/todos')
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
				setIsLoading(false);
			});
	}, []);

	const addTodo = async (newTodo) => {
		const response = await fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: newTodo }),
		});
		const data = await response.json();
		setTodos((prevTodos) => [...prevTodos, data]);
	};

	const deleteTodo = async (id) => {
		await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'DELETE',
		});
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const updateTodo = async (id, updatedTodo) => {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTodo),
		});
		const data = await response.json();
		setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? data : todo)));
	};

	return { todos, isLoading, addTodo, deleteTodo, updateTodo };
};
