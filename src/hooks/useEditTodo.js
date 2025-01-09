import { useState } from 'react';

export const useEditTodo = () => {
	const [editingTodo, setEditingTodo] = useState(null);

	const startEditing = (todo) => {
		setEditingTodo({ ...todo });
	};

	const saveTodo = (updateTodo, editingTodo) => {
		if (editingTodo.title.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}

		updateTodo(editingTodo.id, { title: editingTodo.title });
		setEditingTodo(null);
	};

	return { editingTodo, setEditingTodo, startEditing, saveTodo };
};
