import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: 'Beispiel To-Do-Aufgabe', done: false, working: false},
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // funktionen, mit denen man den state manipuliert
  reducers: {
    addTodo(state, action) {
      const title = action.payload;
      state.todos.push({ done: false, id: state.todos.length + 1, title: title, working: false});
      // state.nextId += 1;
    },
    removeTodo(state, action) {
      const id = action.payload;
      const index = state.todos.findIndex(i => i.id === id);
      state.todos.splice(index, 1);
    },
    toggleDone(state, action) {
      const id = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.done = !todo.done;
    },
    editWorking(state, action) {
      const id = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.working = !todo.working;
    },
    updateTitle(state, action) {
      const { id, title } = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.title = title;
    },
  },
});

export const { addTodo, removeTodo, toggleDone, updateTitle, editWorking } =
  todoSlice.actions;
export default todoSlice.reducer;
