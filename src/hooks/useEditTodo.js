import { useState } from 'react';

export const useEditTodo = () => {
	const [editingTodo, setEditingTodo] = useState(null);

	const startEditing = (todo) => setEditingTodo({ ...todo });

	const saveTodo = (updateTodo) => {
		if (!editingTodo || editingTodo.title.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}
		updateTodo(editingTodo.id, { title: editingTodo.title });
		setEditingTodo(null);
	};

	return { editingTodo, startEditing, saveTodo, setEditingTodo };
};
