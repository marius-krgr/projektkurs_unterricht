import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (state) => {
  const data = { todos: state.todos, nextId: state.nextId };
  localStorage.setItem("todoState", JSON.stringify(data));
};
//Was soll beim Start des Programmes gespeichert werden?
const initialState = {
  todos: [
    //if getLocalStorage was drin ist, setzte das da rein, sonst das folgene als default nehmen!
  ],
  nextId: 2,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  //hier ist nur Datenveränderung, sonst nichts weiter!
  // funktionen, mit denen man den state manipuliert
  reducers: {
    //mit state kommt an die daten ran (von todo)
    //mit action holen wir uns die Daten darein
    loadFromStorage(state) {
      const json = localStorage.getItem("todoState");
      if (json) {
        const data = JSON.parse(json);
        state.todos = data.todos;
        state.nextId = data.nextId;
      }
    },
    addTodo(state, action) {
      const title = action.payload;
      state.todos.push({
        done: false,
        id: state.nextId,
        title: title,
        working: false,
      });
      state.nextId += 1;
      saveLocalStorage(state);
    },
    removeTodo(state, action) {
      const id = action.payload;
      const index = state.todos.findIndex((i) => i.id === id);
      state.todos.splice(index, 1);
      saveLocalStorage(state);
    },
    toggleDone(state, action) {
      const id = action.payload;
      const todo = state.todos.find((i) => i.id === id);
      todo.done = !todo.done;
      saveLocalStorage(state);
    },
    editWorking(state, action) {
      const id = action.payload;
      const todo = state.todos.find((i) => i.id === id);
      todo.working = !todo.working;
      saveLocalStorage(state);
    },
    updateTitle(state, action) {
      const { id, title } = action.payload;
      const todo = state.todos.find((i) => i.id === id);
      todo.title = title;
      saveLocalStorage(state);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleDone,
  updateTitle,
  editWorking,
  loadFromStorage,
} = todoSlice.actions;
export default todoSlice.reducer;
