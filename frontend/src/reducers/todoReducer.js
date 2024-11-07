// /reducers/todoReducer.js

export const initialTodos = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
        return action.payload
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'EDIT_TODO':
        return state.map(todo => todo.id === action.payload.id ? { ...todo, ...action.payload } : todo );
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
