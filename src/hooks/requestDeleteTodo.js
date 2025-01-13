export const requestDeleteTodo = async (id) => {
	await fetch(`http://localhost:3001/todos/${id}`, {
		method: 'DELETE',
	});
};
