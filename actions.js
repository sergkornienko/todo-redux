const actions = {
	addTodo: (title) => ({ type: types.ADD_TODO, title }),
	deleteTodo: (id) => ({ type: types.DELETE_TODO, id }),
	editTodo: (id, title) => ({ type: types.EDIT_TODO, id, title }),
    toggleComplete: (id) => ({ type: types.TOGGLE_COMPLETE_TODO, id }),
    toggleEditing: (id) => ({ type: types.TOGGLE_EDITING_TODO, id }),
	completeAll: () => ({ type: types.COMPLETE_ALL }),
    clearComnpleted: () => ({ type: types.CLEAR_COMPLETED }),
};