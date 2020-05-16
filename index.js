const store = Redux.createStore(rootReducer);
const list = document.querySelector('.todo-list');

const render = () => {
    const todos = store.getState().todos;
    const html = todos.map((todo) => {
        const completedClass = todo.completed ? 'completed' : '';
        return `<li data-id="${todo.id}" class="${completedClass}">
                    <div class="view">
                        <input class="toggle" type="checkbox" /><label>${todo.title}</label>
                        <button class="destroy"></button>
                    </div>
                </li>`;
    });
    
    list.innerHTML = html;
}

render();
store.subscribe(render);
// console.log(store.getState());
// store.dispatch(actions.addTodo('afadd'));
// console.log(store.getState());
// store.dispatch(actions.deleteTodo(1));
// console.log(store.getState());