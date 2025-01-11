export const requestDeleteTodo = async (id, setTodos) => {
	await fetch(`http://localhost:3001/todos/${id}`, {
		method: 'DELETE',
	});
	setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};
