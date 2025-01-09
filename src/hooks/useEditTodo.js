import { useState } from 'react';

export const useEditTodo = () => {
	const [editingTodo, setEditingTodo] = useState(null);

	const startEditing = (todo) => {
		setEditingTodo({ ...todo });
	};

	const saveTodo = (updateTodo, editingTodo) => {
		updateTodo(editingTodo.id, { title: editingTodo.title });
		setEditingTodo(null);
	};

	return { editingTodo, setEditingTodo, startEditing, saveTodo };
};
