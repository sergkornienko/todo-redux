const store = Redux.createStore(rootReducer);
console.log(store.getState());
store.dispatch(actions.addTodo('afadd'));
console.log(store.getState());
store.dispatch(actions.deleteTodo(1));
console.log(store.getState());
