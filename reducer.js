const initialState = [
    {
      id: 1,
      title: "Todo 1",
      completed: false
    },
    {
      id: 2,
      title: "Todo 2",
      completed: true
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false
    }
  ];

const uniqueId = () => {
    const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const len = abc.length;
    let size = 8; // move to param
    let id = '';

    while (0 < size--) {
        id += abc[(len * Math.random() | 0)];
    }

    return id;
}
  
const todos = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            state.push({
                id: uniqueId(),
                completed: false,
                title: action.title
            });
            return state;
        case types.DELETE_TODO:
            return state
                .filter((todo) => todo.id !== action.id);
        case types.EDIT_TODO:
            return state.map((todo) => {
                 return todo.id === action.id 
                    ?  { ...todo, text: action.title }
                    : todo;
            });
        case types.COMPLETE_TODO:
            return state.map((todo) => {
                return todo.id === action.id 
                    ?  { ...todo, completed: !todo.completed }
                    : todo;
            });
        case types.COMPLETE_ALL:
            return state.map((todo) => ({ ...todo, completed: true }));
        case types.CLEAR_COMPLETED:
            return state.filter((todo) => todo.completed === false);

        default:
            return state;
    };
}

const rootReducer = Redux.combineReducers({ todos });