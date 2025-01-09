import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { onValue, ref, set, remove, update } from 'firebase/database';

export const useFirebase = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosRef = ref(db, 'todos/');
		onValue(todosRef, (snapshot) => {
			const data = snapshot.val();
			const todosArray = data
				? Object.entries(data).map(([id, value]) => ({ id, ...value }))
				: [];
			setTodos(todosArray);
			setIsLoading(false);
		});
	}, []);

	const addTodo = async (newTodo) => {
		const newTodoRef = ref(db, 'todos/' + Date.now());
		await set(newTodoRef, { title: newTodo });
	};

	const deleteTodo = async (id) => {
		await remove(ref(db, 'todos/' + id));
	};

	const updateTodo = async (id, updatedTodo) => {
		await update(ref(db, 'todos/' + id), updatedTodo);
	};

	return { todos, isLoading, addTodo, deleteTodo, updateTodo };
};
