const store = Redux.createStore(rootReducer);
const list = document.querySelector('.todo-list');

// crutch 💩
const findId = (event) => {
    const [li] = event.path.filter(p => p.tagName === 'LI');
    return li.dataset.id;
}

const render = () => {
    const todos = store.getState().todos;
    const html = todos.map((todo) => {
        const completedClass = todo.completed ? 'completed' : '';
        const liClass = todo.editing ? 'editing' : completedClass;
        const checked = todo.completed ? 'checked' : '';
        const editingInput = todo.editing 
            ? `<input type="text" class="edit" value="${todo.title}" />` 
            : '';
        return `<li data-id="${todo.id}" class="${liClass}">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${checked}/><label class="label">${todo.title}</label>
                        <button class="destroy"></button>
                    </div>
                    ${editingInput}
                </li>`;
    });
    
    list.innerHTML = html;
}

list.addEventListener('click', (event) => {
    const id = findId(event);
    const { className } = event.target;
    
    switch (className) {
        case 'destroy':
            store.dispatch(actions.deleteTodo(id));
            break;
        case 'toggle':
            store.dispatch(actions.toggleComplete(id));
            break;
        default:
            break;
    }
});

list.addEventListener('dblclick', (event) => {
    const id = findId(event);
    const { className } = event.target;

    if (id && className === 'label') {
        store.dispatch(actions.toggleEditing(id));
    }
});

list.addEventListener('keypress', (event) => {
    const id = findId(event);
    const { className } = event.target;

    if (id && className === 'edit' && event.keyCode === 13) {
        store.dispatch(actions.toggleEditing(id));
        store.dispatch(actions.editTodo(id, event.target.value));
    } 
});

render();
store.subscribe(render);
// console.log(store.getState());
// store.dispatch(actions.addTodo('afadd'));
// console.log(store.getState());
// store.dispatch(actions.deleteTodo(1));
// console.log(store.getState());