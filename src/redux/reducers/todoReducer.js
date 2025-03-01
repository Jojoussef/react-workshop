import { todo } from "node:test";

const initialState = {
  // Define your initial state here
  todos: [
    {
      id: 1,
      text: "Tâche 1",
      completed: false,
    },
  ],
};

export const ActionTypes = {
  // Define your action types here
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases here
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false,
          },
        ],
      };

    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
