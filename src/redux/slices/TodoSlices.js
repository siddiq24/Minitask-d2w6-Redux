import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      });
    },
    TOGGLE_TODO: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DELETE_TODO: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = todosSlice.actions;
export default todosSlice.reducer;