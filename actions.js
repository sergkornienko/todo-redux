const actions = {
	addTodo: (title) => ({ type: types.ADD_TODO, title }),
	deleteTodo: (id) => ({ type: types.DELETE_TODO, id }),
	editTodo: (id, title) => ({ type: types.EDIT_TODO, id, title }),
    completeTodo: (id) => ({ type: types.COMPLETE_TODO, id }),
	completeAll: () => ({ type: types.COMPLETE_ALL }),
    learComnpleted: () => ({ type: types.CLEAR_COMPLETED }),
};